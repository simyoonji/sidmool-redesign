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
