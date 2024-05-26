const sections = document.querySelectorAll('section');
  sections.forEach(section => {
	gsap.to(section, {
	  duration: 1,
	  opacity: 1,
	  scrollTrigger: {
		trigger: section
	  }
	});
  });
  
  //list ani
  const box2 = document.querySelector(".advertise");
  const boxListItems = box2.querySelectorAll('li');
  
  boxListItems.forEach(item => {
	gsap.to(item, {
	  duration: 1,
	  opacity: 1,
	  scrollTrigger: {
		trigger: item
	  }
	});
  });