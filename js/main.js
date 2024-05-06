// search

const search = document.querySelector('.search')
const searchBtn = document.querySelector('.search_btn-open')
const searchClose = document.querySelector('.search_btn-close')

searchBtn.addEventListener('click', () => {
	search.classList.add('open')
})
searchClose.addEventListener('click', () => {
	search.classList.remove('open')
})


// burgermenu

const toggleMenu = () => {
  let menu = document.querySelector(".main-nav"),
    burger = document.querySelector(".main-nav__toggle"),
    header = document.querySelector(".header");

  burger.addEventListener('click', (e) => {
    burger.classList.toggle("is-active");
    if (burger.classList.contains("is-active")) {
      document.body.style.overflow = "hidden";
      menu.classList.add("is-active");
      header.classList.add("is-active");
    } else {
      document.body.style.overflow = "";
      menu.classList.remove("is-active");
      header.classList.remove("is-active");
    }
  });
};

toggleMenu();

