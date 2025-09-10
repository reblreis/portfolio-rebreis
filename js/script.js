// Botão hamburguer
const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  menuBtn.classList.toggle("open");

  // acessibilidade
  const expanded = menuBtn.getAttribute("aria-expanded") === "true" || false;
  menuBtn.setAttribute("aria-expanded", !expanded);
});

// Destacar link ativo conforme rolagem
const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".menu a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(sec => {
    const sectionTop = sec.offsetTop - 100;
    if (scrollY >= sectionTop) {
      current = sec.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
});