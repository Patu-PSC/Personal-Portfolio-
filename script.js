// Scroll reveal animation
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  sections.forEach(section => {
    section.style.opacity = 0;
    section.style.transform = "translateY(30px)";
  });

  const reveal = () => {
    sections.forEach(section => {
      const top = section.getBoundingClientRect().top;
      if (top < window.innerHeight - 100) {
        section.style.opacity = 1;
        section.style.transform = "translateY(0)";
        section.style.transition = "all 0.6s ease-out";
      }
    });
  };

  window.addEventListener("scroll", reveal);
  reveal(); // Reveal on load
});