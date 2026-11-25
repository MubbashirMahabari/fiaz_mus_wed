/**
 * Premium Islamic Wedding Audio Engine
 * Default Track: "Shukran Laka Rabbi" by Sayyid Sufiyan
 * Automatically plays on page load without requiring any click.
 * Handles browser autoplay policies seamlessly:
 *   - Attempts immediate unmuted playback.
 *   - If the browser enforces cold-load interaction policy, smoothly starts on
 *     the first passive movement, scroll, or touch (no button click required).
 */

export interface IslamicTrack {
  id: string;
  title: string;
  artist: string;
  arabicTitle: string;
  description: string;
  src: string;
}

export const ISLAMIC_TRACKS: IslamicTrack[] = [
  {
    id: 'shukran-laka-rabbi',
    title: 'Shukran Laka Rabbi',
    artist: 'Sayyid Sufiyan',
    arabicTitle: 'شُكْراً لَكَ رَبِّي',
    description: 'Heartfelt prayer of gratitude to Allah for this blessed union',
    src: '/music/shukran-laka-rabbi.mp3',
  },
  {
    id: 'the-beauty-of-existence',
    title: 'The Beauty of Existence',
    artist: 'Noor Al Qalb',
    arabicTitle: 'جَمَالُ الْوُجُود',
    description: 'Soulful, ethereal nasheed on divine love & the beauty of existence',
    src: '/music/the-beauty-of-existence.mp3',
  },
  {
    id: 'barakallahu-lakuma',
    title: 'Barakallahu Lakuma',
    artist: 'Maher Zain',
    arabicTitle: 'بَارَكَ اللَّهُ لَكُمَا',
    description: 'Celebrated Sunnah wedding blessing nasheed',
    src: '/music/barakallahu-lakuma.mp3',
  },
];

export interface AudioState {
  isPlaying: boolean;
  isMuted: boolean;
  currentTrack: IslamicTrack;
  volume: number;
}

type AudioListener = (state: AudioState) => void;

class AmbientSoundManager {
  private isPlaying = false;
  private isMuted = false;
  private volume = 0.55;
  private customAudio: HTMLAudioElement | null = null;
  private currentTrack: IslamicTrack = ISLAMIC_TRACKS[0]; // Default: Shukran Laka Rabbi
  private listeners: Set<AudioListener> = new Set();
  private isInitialized = false;
  private autoPlayAttempted = false;

  public init() {
    if (typeof window === 'undefined' || this.isInitialized) return;
    this.isInitialized = true;
    this.setupAudioElement(this.currentTrack);
    this.autoPlayImmediately();
  }

  private setupAudioElement(track: IslamicTrack) {
    if (typeof window === 'undefined') return;

    if (!this.customAudio) {
      const audio = new Audio();
      audio.loop = true;
      audio.preload = 'auto';
      audio.volume = this.volume;
      audio.muted = this.isMuted;

      audio.addEventListener('error', () => {
        const err = audio.error;
        // Code 1 is MEDIA_ERR_ABORTED - triggered when a request is paused or interrupted by navigation. Ignore it.
        if (err && err.code !== 1) {
          console.warn('Audio playback notice:', err.message || err.code);
        }
      });

      this.customAudio = audio;
    }

    if (this.customAudio.src !== window.location.origin + track.src && !this.customAudio.src.endsWith(track.src)) {
      this.customAudio.src = track.src;
      this.customAudio.load();
    }
  }

  /**
   * Attempts immediate unmuted playback without any user click.
   * Strategy:
   *  1. Try unmuted play directly — works on most return visitors / mobile.
   *  2. If browser policy blocks it (NotAllowedError), silently start muted
   *     so the audio stream is buffered & ready, then unmute automatically
   *     on the very first passive gesture (mousemove, scroll, touchstart, etc.)
   *     with NO click required.
   */
  private autoPlayImmediately() {
    if (!this.customAudio || this.autoPlayAttempted) return;
    this.autoPlayAttempted = true;

    // Ensure unmuted and correct volume before the first attempt
    this.customAudio.muted = false;
    this.customAudio.volume = this.volume;
    this.isPlaying = true;
    this.isMuted = false;
    this.notify();

    this.customAudio
      .play()
      .then(() => {
        // ✅ Unmuted autoplay succeeded
        this.isPlaying = true;
        this.isMuted = false;
        this.notify();
      })
      .catch((err: unknown) => {
        // Only fall back to muted if the browser policy blocked us
        const name = err instanceof Error ? err.name : '';
        if (name !== 'NotAllowedError' && name !== 'AbortError') return;

        if (!this.customAudio) return;

        // Start muted so the audio is buffered
        this.customAudio.muted = true;
        this.isMuted = true;
        this.notify();

        this.customAudio.play().catch(() => {
          // Still blocked — will activate on first gesture below
        });

        // Unmute on the very first passive gesture (no click required)
        const activateAudio = () => {
          if (!this.customAudio) return;
          this.customAudio.muted = false;
          this.customAudio.volume = this.volume;
          this.isMuted = false;
          this.isPlaying = true;
          if (this.customAudio.paused) {
            this.customAudio.play().catch(() => {});
          }
          this.notify();
          cleanup();
        };

        const cleanup = () => {
          window.removeEventListener('mousemove', activateAudio);
          window.removeEventListener('pointermove', activateAudio);
          window.removeEventListener('scroll', activateAudio);
          window.removeEventListener('touchstart', activateAudio);
          window.removeEventListener('click', activateAudio);
          window.removeEventListener('keydown', activateAudio);
        };

        window.addEventListener('mousemove', activateAudio, { once: true, passive: true });
        window.addEventListener('pointermove', activateAudio, { once: true, passive: true });
        window.addEventListener('scroll', activateAudio, { once: true, passive: true });
        window.addEventListener('touchstart', activateAudio, { once: true, passive: true });
        window.addEventListener('click', activateAudio, { once: true, passive: true });
        window.addEventListener('keydown', activateAudio, { once: true, passive: true });
      });
  }

  private notify() {
    const state = this.getState();
    this.listeners.forEach((listener) => {
      try {
        listener(state);
      } catch (err) {
        console.error('Error in audio listener', err);
      }
    });
  }

  public play(trackId?: string): boolean {
    this.init();

    if (trackId && trackId !== this.currentTrack.id) {
      const found = ISLAMIC_TRACKS.find((t) => t.id === trackId);
      if (found) {
        this.currentTrack = found;
        this.setupAudioElement(found);
      }
    }

    this.isPlaying = true;
    this.isMuted = false;
    this.notify();

    if (this.customAudio) {
      this.customAudio.muted = false;
      this.customAudio.volume = this.volume;
      const playPromise = this.customAudio.play();
      if (playPromise !== undefined) {
        playPromise.catch((e) => {
          console.warn('Playback error:', e);
        });
      }
      return true;
    }
    return false;
  }

  public pause() {
    this.isPlaying = false;
    this.notify();

    if (this.customAudio) {
      this.customAudio.pause();
    }
  }

  public togglePlay(): boolean {
    if (this.isPlaying) {
      this.pause();
      return false;
    } else {
      this.play();
      return true;
    }
  }

  public toggleMute(): boolean {
    this.isMuted = !this.isMuted;
    if (this.customAudio) {
      this.customAudio.muted = this.isMuted;
    }
    this.notify();
    return this.isMuted;
  }

  public setVolume(vol: number) {
    this.volume = Math.max(0, Math.min(1, vol));
    if (this.customAudio) {
      this.customAudio.volume = this.volume;
    }
    this.notify();
  }

  public selectTrack(trackId: string) {
    const track = ISLAMIC_TRACKS.find((t) => t.id === trackId);
    if (!track) return;

    this.currentTrack = track;
    this.setupAudioElement(track);
    this.play(track.id);
  }

  public getState(): AudioState {
    return {
      isPlaying: this.isPlaying,
      isMuted: this.isMuted,
      currentTrack: this.currentTrack,
      volume: this.volume,
    };
  }

  public getPlayingState(): boolean {
    return this.isPlaying;
  }

  public getMutedState(): boolean {
    return this.isMuted;
  }

  public getCurrentTrack(): IslamicTrack {
    return this.currentTrack;
  }

  public subscribe(listener: AudioListener): () => void {
    this.listeners.add(listener);
    listener(this.getState());
    return () => {
      this.listeners.delete(listener);
    };
  }
}

export const ambientSound = new AmbientSoundManager();
