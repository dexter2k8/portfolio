// Abrir e fechar o menu de navegação em tablet/mobile
const menuIcon = document.querySelector("#menu-icon");
const navBar = document.querySelector("nav");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navBar.classList.toggle("active");
};

// Alterna a seção ativa na barra de navegação do header
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 150;
    const height = sec.offsetHeight;
    const id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document.querySelector("header nav a[href*=" + id + "]").classList.add("active");
      });
    }
  });

  // Borda inferior sombreada ao rolar a página
  const header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  // Recuar navbar ao selecionar um item
  menuIcon.classList.remove("bx-x");
  navBar.classList.remove("active");
};

// Efeito de deslizar dos elementos
ScrollReveal({
  //   reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(".home figure, .skills-container, .portfolio-box, .contact form", { origin: "bottom" });
ScrollReveal().reveal(".home-content h1, .about figure", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

// Efeito redigitar o título
const typed = new Typed(".multiple-text", {
  strings: ["Frontend Developer", "Backend Developer", "Fullstack Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
