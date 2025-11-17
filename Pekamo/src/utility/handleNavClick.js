// src/utils/handleNavClick.js
export default function handleNavClick(e, path, navigate) {
  if (path.startsWith("#")) {
    e.preventDefault();
    const el = document.getElementById(path.slice(1));
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  } else if (navigate) {
    // Only call navigate if provided (React Router context)
    navigate(path);
  }
}
