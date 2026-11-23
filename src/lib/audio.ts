/**
 * Spiritual Ambient Audio Synthesizer (Web Audio API)
 * Plays gentle, meditative, ethereal Islamic wedding ambience chords (oud/harp/ambient pad harmonics)
 * Never auto-plays; strictly activated after user interaction.
 * Clean, lightweight, zero dependencies, works 100% offline with zero 404 errors.
 */

class AmbientSoundManager {
  private audioCtx: AudioContext | null = null;
  private isPlaying = false;
  private isMuted = false;
  private gainNode: GainNode | null = null;
  private timer: number | null = null;
  private customAudio: HTMLAudioElement | null = null;

  // Soothing traditional Maqam Bayati / Hijaz / Pentatonic ambient frequencies (C4, E4, G4, A4, B4, C5, E5, G5)
  private scale = [261.63, 293.66, 329.63, 392.00, 440.00, 493.88, 523.25, 659.25, 783.99];

  public init() {
    if (typeof window === 'undefined') return;

    // Check if an mp3 file is provided in public/music/wedding-ambience.mp3
    try {
      const audio = new Audio('/music/wedding-ambience.mp3');
      audio.loop = true;
      audio.volume = 0.45;
      audio.addEventListener('error', () => {
        // Fall back to Web Audio synth silently
        this.customAudio = null;
      });
      this.customAudio = audio;
    } catch {
      this.customAudio = null;
    }
  }

  private startSynthesizer() {
    if (typeof window === 'undefined') return;
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;

    if (!this.audioCtx) {
      this.audioCtx = new AudioContextClass();
    }

    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }

    this.gainNode = this.audioCtx.createGain();
    this.gainNode.gain.setValueAtTime(this.isMuted ? 0 : 0.08, this.audioCtx.currentTime);
    this.gainNode.connect(this.audioCtx.destination);

    // Play meditative soft bell/pad progression
    const playNote = () => {
      if (!this.audioCtx || !this.gainNode || !this.isPlaying) return;

      const osc = this.audioCtx.createOscillator();
      const noteGain = this.audioCtx.createGain();

      // Alternate between warm sine and soft triangle for flute/harp warmth
      osc.type = Math.random() > 0.4 ? 'sine' : 'triangle';
      const freq = this.scale[Math.floor(Math.random() * this.scale.length)];
      osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);

      const now = this.audioCtx.currentTime;
      const duration = 4.0 + Math.random() * 3.0; // Slow, serene decay

      noteGain.gain.setValueAtTime(0.001, now);
      noteGain.gain.exponentialRampToValueAtTime(0.2, now + 1.2);
      noteGain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      osc.connect(noteGain);
      noteGain.connect(this.gainNode);

      osc.start(now);
      osc.stop(now + duration + 0.1);

      // Schedule next gentle note
      const nextTime = (1200 + Math.random() * 1800);
      this.timer = window.setTimeout(playNote, nextTime);
    };

    playNote();
  }

  public play(): boolean {
    this.isPlaying = true;

    if (this.customAudio) {
      this.customAudio.play().catch(() => {
        // Fallback to Web Audio synthesis if mp3 fails
        this.startSynthesizer();
      });
      return true;
    } else {
      this.startSynthesizer();
      return true;
    }
  }

  public pause() {
    this.isPlaying = false;
    if (this.customAudio) {
      this.customAudio.pause();
    }
    if (this.timer) {
      window.clearTimeout(this.timer);
      this.timer = null;
    }
    if (this.audioCtx && this.audioCtx.state === 'running') {
      this.audioCtx.suspend();
    }
  }

  public toggleMute(): boolean {
    this.isMuted = !this.isMuted;
    if (this.customAudio) {
      this.customAudio.muted = this.isMuted;
    }
    if (this.gainNode && this.audioCtx) {
      this.gainNode.gain.setValueAtTime(this.isMuted ? 0 : 0.08, this.audioCtx.currentTime);
    }
    return this.isMuted;
  }

  public getPlayingState(): boolean {
    return this.isPlaying;
  }

  public getMutedState(): boolean {
    return this.isMuted;
  }
}

export const ambientSound = new AmbientSoundManager();
