import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function scrollToStory(e: React.MouseEvent) {
  e.preventDefault();
  const target = document.getElementById('story');
  if (!target) return;
  const start = window.scrollY;
  const end = target.getBoundingClientRect().top + window.scrollY;
  const duration = 1800;
  const startTime = performance.now();
  function ease(t: number) { return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t; }
  function step(now: number) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, start + (end - start) * ease(progress));
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}
