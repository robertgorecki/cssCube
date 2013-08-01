var cube = document.querySelector('.cube'),
	links = document.querySelectorAll('.links a'),
	walls = document.querySelectorAll('.cube li'),
	opacityCtrl = document.querySelector('.opacity-control');

Array.prototype.forEach.call(links, function(link) {
	link.addEventListener("click", function(e) {
		e.preventDefault();
		cube.setAttribute("data-visible", e.target.getAttribute("href"));
	});
});

opacityCtrl.addEventListener("change", function(e) {
	e.preventDefault();
	Array.prototype.forEach.call(walls, function(wall) {
		wall.setAttribute("style", "opacity:" + e.target.value + ";");
	});
});