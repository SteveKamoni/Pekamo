import { useState, useEffect, useRef } from "react";

/**
 * useInView Hook
 * Detects when a DOM element enters the viewport.
 *
 * @param {Object} options - IntersectionObserver options
 *   threshold: 0-1, how much of element should be visible
 */
export default function useInView(options = { threshold: 0.2 }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
      }
    }, options);

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref, options]);

  return { ref, inView };
}
