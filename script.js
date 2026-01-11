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

const heroImg = document.querySelector(".hero-img img");

if(heroImg){
  heroImg.addEventListener("mousemove", e=>{
    const r = heroImg.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - .5;
    const y = (e.clientY - r.top) / r.height - .5;
    heroImg.style.transform = `rotateX(${y*-6}deg) rotateY(${x*6}deg) scale(1.02)`;
  });

  heroImg.addEventListener("mouseleave", ()=>{
    heroImg.style.transform = "none";
  });
}