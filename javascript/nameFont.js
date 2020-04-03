const spans = document.querySelectorAll('.word span');

spans.forEach((span, idx) => {
	span.addEventListener('hover', (e) => {
		e.target.classList.add('active');
	});
	span.addEventListener('animationend', (e) => {
		e.target.classList.remove('active');
	});
	
	// Initial animation
	setTimeout(() => {
		span.classList.add('active');
	}, 1000 * (idx+1))
});