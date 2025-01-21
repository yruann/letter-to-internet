// Function to handle hover effects for any media (images and videos)
function setupHoverEffect() {
	const links = document.querySelectorAll('.hover-link');

	links.forEach(link => {
		// Get the target media ID from the data-target attribute
		const targetId = link.getAttribute('data-target');
		const targetMedia = document.getElementById(targetId);

		if (targetMedia) {
			// Show media on hover
			link.addEventListener('mouseenter', () => {
				targetMedia.style.display = 'inline-block';

				// Play video if the target is a video element
				if (targetMedia.tagName === 'VIDEO') {
					targetMedia.play();
				}
			});

			// Hide media when mouse leaves
			link.addEventListener('mouseleave', () => {
				// Pause video if the target is a video element
				if (targetMedia.tagName === 'VIDEO') {
					targetMedia.pause();
					targetMedia.currentTime = 0; // Reset to the beginning
				}

				targetMedia.style.display = 'none';
			});
		}
	});
}

// Initialize hover effects
setupHoverEffect();