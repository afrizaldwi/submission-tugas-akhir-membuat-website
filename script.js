// navbar
const navbar = document.querySelector(".navbar");
window.onscroll = () => {
	this.scrollY > 10
		? navbar.classList.add("sticky")
		: navbar.classList.remove("sticky");
};

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav ul");
const a = document.querySelector("nav a");

menuToggle.addEventListener("click", function () {
	nav.classList.toggle("slide");
	menuToggle.classList.toggle("open");
	a.classList.remove("navbar-active");
});
