/* keeps the footer copyright year current */
(function () {
	var year = new Date().getFullYear();
	var spots = document.querySelectorAll('.current-year');
	for (var i = 0; i < spots.length; i++) {
		spots[i].textContent = year;
	}
})();
