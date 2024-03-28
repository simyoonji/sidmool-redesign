const mouse = document.querySelector('.mouse');
const buttonAll = document.querySelectorAll('button');
const aTagAll = document.querySelectorAll('a');
const inputAll = document.querySelectorAll('input');
const MOUSE_FOCUS = 'mouse-focus';

// 마우스 변경
window.addEventListener('mousemove',(event) => {
    mouse.style.left = `${event.clientX}px` 
    mouse.style.top = `${event.clientY}px` 
});
buttonAll.forEach((item) => {
    item.addEventListener('mouseover', () => {
         mouse.classList.add(MOUSE_FOCUS)
    });
    item.addEventListener('mouseout', () => {
        mouse.classList.remove(MOUSE_FOCUS)
    });
});
aTagAll.forEach((item) => {
    item.addEventListener('mouseover', () => {
        mouse.classList.add(MOUSE_FOCUS)
    });
    item.addEventListener('mouseout', () => {
        mouse.classList.remove(MOUSE_FOCUS)
    });
});
inputAll.forEach((item) => {
    item.addEventListener('mouseover', () => {
        mouse.classList.add(MOUSE_FOCUS)
    });
    item.addEventListener('mouseout', () => {
        mouse.classList.remove(MOUSE_FOCUS)
    });
});


//menu open
const menuOpen = document.querySelector('.menu-open');
const menuOpenStick1 = menuOpen.querySelector('.menu-open span:nth-of-type(1)');
const menuOpenStick2 = menuOpen.querySelector('.menu-open span:nth-of-type(2)');
const menuOpenStick3 = menuOpen.querySelector('.menu-open span:nth-of-type(3)');
const menuBox = document.querySelector('.menu');
const CHANGE = 'change';

menuOpen.addEventListener('click', () => {
    const topBtn = document.querySelector(".quick");

    menuOpenStick1.classList.toggle(CHANGE);
    menuOpenStick2.classList.toggle(CHANGE);
    menuOpenStick3.classList.toggle(CHANGE);
    menuBox.classList.toggle('show');
    topBtn.classList.toggle('hide');
});
