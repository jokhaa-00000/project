/*links.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
  });
});
document.querySelectorAll("header a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.querySelector(".nav-menu");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
fetch("contacts.html")
  .then((res) => res.text())
  .then((html) => (content.innerHTML = html));
function loadPage(page) {
  const content = document.getElementById("content");

  if (page === "home") {
    content.innerHTML = "<h1>Welcome to Home Page</h1>";
  } else if (page === "contact") {
    fetch("contacts.html")
      .then((res) => res.text())
      .then((html) => (content.innerHTML = html))
      .catch((err) => console.log("Error loading contacts page:", err));
  }
}*/

const contactLink = document.querySelector("#contact-link");

if (contactLink) {
  contactLink.addEventListener("click", () => {
    window.location.href = "contact.html";
  });
}

const homeLink = document.querySelector("#home-link");

if (homeLink) {
  homeLink.addEventListener("click", () => {
    window.location.href = "index.html";
  });
}
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    hamburger.classList.toggle("active");
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      setTimeout(() => {
        navMenu.classList.remove("active");
        hamburger.classList.remove("active");
      }, 100);
    });
  });
});
