// Menu responsivo e navegação acessível
const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

if (menuBtn && menu) {
  menuBtn.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("active");
    menuBtn.classList.toggle("open", isOpen);
    menuBtn.setAttribute("aria-expanded", String(isOpen));
    menuBtn.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("active");
      menuBtn.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
      menuBtn.setAttribute("aria-label", "Abrir menu");
    });
  });
}

// Sombra no cabeçalho ao rolar a página
const header = document.querySelector("header");
if (header) {
  const updateHeader = () => header.classList.toggle("scrolled", window.scrollY > 8);
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });
}

// Destaca o item de navegação correspondente à seção visível
const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".menu a[href^='#']");
if ("IntersectionObserver" in window && sections.length && navLinks.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        const active = link.getAttribute("href") === `#${entry.target.id}`;
        link.classList.toggle("active", active);
        if (active) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    });
  }, { rootMargin: "-25% 0px -60% 0px" });
  sections.forEach((section) => observer.observe(section));
}