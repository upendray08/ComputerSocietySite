burger = document.querySelector('.burger')
rightnav = document.querySelector('.rightnav')
navlist = document.querySelector('.nav-list')
navbar = document.querySelector('.navbar')

burger.addEventListener("click", () => {
    rightnav.classList.toggle('v-nav-resp')
    navbar.classList.toggle('h-nav-resp')
    navlist.classList.toggle('v-nav-resp')
});