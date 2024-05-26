const AboutContents = document.querySelectorAll('.about-mind-contents');

AboutContents.forEach(item => {
	gsap.to(item, {
	  duration: 2,
	  opacity: 1,
	  scrollTrigger: {
		trigger: item
	  }
	});
  });
