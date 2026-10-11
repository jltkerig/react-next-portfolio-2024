/* keeps the footer copyright year current */
document.querySelectorAll(".current-year").forEach(function (el) {
	el.textContent = new Date().getFullYear();
});
