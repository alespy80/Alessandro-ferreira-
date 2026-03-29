// ── NAV SCROLL ──
window.addEventListener("scroll", () => {
  document.getElementById("nav").style.boxShadow =
    window.scrollY > 20 ? "0 4px 30px rgba(0,0,0,.6)" : "none";
});

// ── MENU MOBILE ──
document.getElementById("nav-toggle").addEventListener("click", () => {
  document.getElementById("nav-mobile").classList.toggle("aberto");
});
document.querySelectorAll(".nav-mobile a").forEach(a => {
  a.addEventListener("click", () => {
    document.getElementById("nav-mobile").classList.remove("aberto");
  });
});

// ── REVEAL AO ROLAR ──
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("show");
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

reveals.forEach(el => observer.observe(el));

// ── ANIMAÇÃO STAGGER NOS CARDS ──
const cardObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const cards = e.target.querySelectorAll(
        ".metodo-item, .stat-card, .prob-item, .plano-card"
      );
      cards.forEach((c, i) => {
        c.style.opacity = "0";
        c.style.transform = "translateY(20px)";
        c.style.transition = `opacity .5s ease ${i * 0.1}s, transform .5s ease ${i * 0.1}s`;
        setTimeout(() => {
          c.style.opacity = "1";
          c.style.transform = "translateY(0)";
        }, 50);
      });
      cardObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(".metodo-grid, .stats-grid, .problema-grid").forEach(el => {
  cardObserver.observe(el);
});
