// Scroll reveal
const reveals = document.querySelectorAll(".reveal");

const handler = () => {
  const trigger = window.innerHeight * 0.85;
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < trigger) el.classList.add("visible");
  });
};

window.addEventListener("scroll", handler);
window.addEventListener("load", handler);
