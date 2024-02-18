function mobNav() {
  let menuBtn = document.querySelector(".header__bars");
  let closeBtn = document.querySelector(".moblie-nav__close");
  let menu = document.querySelector(".moblie-nav__container");
  let headerBar = document.querySelector(".header");
  let heroSection = document.querySelector(".hero");
  let heroBtn = document.querySelector(".hero__btn");

  menuBtn.addEventListener("click", () => {
    menu.classList.add("mobile-nav__toggle");
    headerBar.style.visibility = "hidden";
    heroSection.style.visibility = "hidden";
    heroBtn.style.opacity = "0";
  });

  menu.addEventListener("click", () => {
    menu.classList.remove("mobile-nav__toggle");
    headerBar.style.visibility = "visible";
    heroSection.style.visibility = "visible";
    heroBtn.style.opacity = "100";
  });

  closeBtn.addEventListener("click", () => {
    menu.classList.remove("mobile-nav__toggle");
    headerBar.style.visibility = "visible";
    heroSection.style.visibility = "visible";
  });
}

export default mobNav;
