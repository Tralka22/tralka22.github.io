function draw() {
	let canvas = document.querySelector('.stroboscope');
	let ctx = canvas.getContext('2d');
	let colors = ['Black', 'White', 'Red', 'Green', 'Blue', 'Cyan', 'Magenta', 'Yellow'];
	let w = canvas.width
	let h = canvas.height
	ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
	ctx.fillRect(0, 0, w, h * 2);
}

setInterval(draw, 1);