const nav = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const navBtnImg = document.querySelector("#nav-btn-img");
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section");

//Preloader
function hidePreloader() {
  const preloader = document.getElementById("preloader");
  preloader.style.display = "none";
}

window.addEventListener("load", function () {
  setTimeout(hidePreloader, 1700);
});

//Hamburger menu
navBtn.onclick = () => {
  if (nav.classList.toggle("open")) {
    navBtnImg.src = "img/icons/close.svg";
  } else {
    navBtnImg.src = "img/icons/open.svg";
  }
};

//Sticky header & goToTop button
window.addEventListener("scroll", function () {
  const header = document.querySelector("#header");
  const hero = document.querySelector("#home");
  let triggerHeight = hero.offsetHeight - 170;

  if (window.scrollY > triggerHeight) {
    header.classList.add("header-sticky");
    goToTop.classList.add("reveal");
  } else {
    header.classList.remove("header-sticky");
    goToTop.classList.remove("reveal");
  }
});

//Change Active Nav
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navLinks.forEach((nav) => nav.classList.remove("active"));

    this.classList.add("active");
  });
});

// Nav link active as the user scrolls to the corresponding section
function observerCallback(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navLinks.forEach((link) => link.classList.remove("active"));

      const activeLink = document.querySelector(
        `.nav-link[href="#${entry.target.id}"]`
      );
      activeLink.classList.add("active");
    }
  });
}

const observer = new IntersectionObserver(observerCallback, {
  root: null,
  threshold: 0.4,
});

sections.forEach((section) => observer.observe(section));

//AOS animations settings
AOS.init({
  once: true,
});
