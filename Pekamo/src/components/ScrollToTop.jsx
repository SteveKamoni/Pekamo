import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    requestAnimationFrame(() => {
      // Try to scroll to the hero first
      const hero = document.getElementById('home');
      if (hero) {
        hero.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        // fallback to window top
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
