const box1 = document.querySelector(".introduce");
const box2 = document.querySelector(".advertise");
const boxList1 = box2.querySelector('li:nth-of-type(1)');
const boxList2 = box2.querySelector('li:nth-of-type(2)');
const boxList3 = box2.querySelector('li:nth-of-type(3)');
const boxList4 = box2.querySelector('li:nth-of-type(4)');

const box3 = document.querySelector(".recommend");
const box4 = document.querySelector(".event");
const box5 = document.querySelector(".Campaign");
const box6 = document.querySelector(".custom");

 gsap.to(box1, {
	duration: 2,
	opacity : 1,

	scrollTrigger: {
		trigger : box1
	}
});

gsap.to(boxList1, {
	duration: 1,
	opacity : 1,

	scrollTrigger: {
		trigger : boxList1
	}
});
gsap.to(boxList2, {
	duration: 1,
	opacity : 1,

	scrollTrigger: {
		trigger : boxList2
	}
});
gsap.to(boxList3, {
	duration: 1,
	opacity : 1,

	scrollTrigger: {
		trigger : boxList3
	}
});
gsap.to(boxList4, {
	duration: 1,
	opacity : 1,

	scrollTrigger: {
		trigger : boxList4
	}
});

gsap.to(box3, {
	duration: 2,
	opacity : 1,

	scrollTrigger: {
		trigger : box3
	}
});

gsap.to(box4, {
	duration: 2,
	opacity : 1,

	scrollTrigger: {
		trigger : box4
	}
});

gsap.to(box5, {
	duration: 2,
	opacity : 1,

	scrollTrigger: {
		trigger : box5
	}
});

gsap.to(box6, {
	duration: 2,
	opacity : 1,

	scrollTrigger: {
		trigger : box6
	}
});
