export const INTRO_STORAGE_KEY = 'av-intro-seen'
export const INTRO_DURATION_MS = 2400

/** True while the intro splash still has to play in this session. */
export function introWillPlay(): boolean {
  if (typeof window === 'undefined') return false
  try {
    return !window.sessionStorage.getItem(INTRO_STORAGE_KEY)
  } catch {
    return false
  }
}

export function markIntroPlayed(): void {
  try {
    window.sessionStorage.setItem(INTRO_STORAGE_KEY, '1')
  } catch {
    // sessionStorage unavailable — the splash will simply replay next load
  }
}

/**
 * Delay (in seconds) that page-load animations should wait so they are
 * revealed by, rather than hidden behind, the intro splash.
 */
export function introDelaySeconds(reducedMotion: boolean | null): number {
  if (!introWillPlay()) return 0
  return reducedMotion ? 0.4 : 2.0
}
