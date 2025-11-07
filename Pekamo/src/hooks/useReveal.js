import { useEffect, useRef } from "react";

/**
 * Hook: returns a ref to attach to any element that should reveal on scroll.
 * It toggles the `is-visible` class (works with .reveal from _utils.scss).
 */
export default function useReveal({ once = true } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            if (once) observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  return ref;
}
