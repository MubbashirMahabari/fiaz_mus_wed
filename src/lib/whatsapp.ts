export const WHATSAPP_INVITATION_TEXT = `Assalamu Alaikum wa Rahmatullahi wa Barakatuh.

With the blessings of Almighty Allah, we cordially invite you and your family to the Nikah and Valima ceremonies of Mohammad Faizan & Muskan.

AQAD CEREMONY
Friday, 8th January 2027
11:30 AM
J.B. Garden Hall, Near Asar Mahal, Vijayapur.

VALIMA RECEPTION
Saturday, 9th January 2027
7:00 PM onwards
Alamgiri Function Hall, Beside Old Bus Stand, Vijayapur.

Your gracious presence and duas will be our greatest happiness.

With Best Compliments From:
Mr. Basheer Ahmed
Mohammad Ibrahim urf Haji Saheb Khadim
Khadim & Mujawar Families, Relatives & Friends.

JazakAllahu Khairan!`;

/**
 * Generates a WhatsApp share URL with the exact pre-filled wedding message
 */
export function getWhatsAppShareUrl(customUrl?: string): string {
  const urlToAppend = customUrl || (typeof window !== 'undefined' ? window.location.href : '');
  const fullText = urlToAppend 
    ? `${WHATSAPP_INVITATION_TEXT}\n\nView Digital Invitation Card:\n${urlToAppend}`
    : WHATSAPP_INVITATION_TEXT;
  return `https://api.whatsapp.com/send?text=${encodeURIComponent(fullText)}`;
}

/**
 * Triggers native Web Share API or falls back to clipboard copying
 */
export async function shareInvitation(onFallbackCopy?: () => void): Promise<boolean> {
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareData = {
    title: 'Mohammad Faizan & Muskan | Wedding Invitation',
    text: WHATSAPP_INVITATION_TEXT,
    url: currentUrl,
  };

  if (typeof navigator !== 'undefined' && navigator.share && navigator.canShare && navigator.canShare(shareData)) {
    try {
      await navigator.share(shareData);
      return true;
    } catch (err: unknown) {
      if ((err as Error)?.name !== 'AbortError') {
        if (onFallbackCopy) onFallbackCopy();
      }
      return false;
    }
  } else {
    // Fallback: Copy invitation link to clipboard
    try {
      if (typeof navigator !== 'undefined' && navigator.clipboard) {
        await navigator.clipboard.writeText(`${WHATSAPP_INVITATION_TEXT}\n\n${currentUrl}`);
        if (onFallbackCopy) onFallbackCopy();
        return true;
      }
    } catch {
      // Ignored
    }
    return false;
  }
}
