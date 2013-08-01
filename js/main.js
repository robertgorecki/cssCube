var cube = document.querySelector('.cube'),
	links = document.querySelectorAll('.links a');

Array.prototype.forEach.call(links, function(link) {
	link.addEventListener("click", function(e) {
		e.preventDefault();
		console.log(e.target.getAttribute("href"));
		cube.setAttribute("data-visible", e.target.getAttribute("href"));
	});
});