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

// search창 열기,닫기
const searchForm = document.querySelector('.search-form');
const searchInput = searchForm.querySelector('input');
const searchOpen = document.querySelector('.search-open');
const SHOW = 'show';

document.addEventListener('click', (e) => {
    // 클릭한곳 e.target이 searchForm 이거나 searchOpen이 아니면 show를 remove 한다.
    if (!searchForm.contains(e.target) && !searchOpen.contains(e.target)) {
        searchForm.classList.remove(SHOW);
        searchInput.value = '';
    }
});
document.querySelector('.search-open')
    .addEventListener('click', (e) => {
        e.stopPropagation(); 
        searchForm.classList.toggle(SHOW);
    });

//menu창 열기,닫기
const menuOpen = document.querySelector('.menu-open');
const menuOpenStick1 = menuOpen.querySelector('.menu-open span:nth-of-type(1)');
const menuOpenStick2 = menuOpen.querySelector('.menu-open span:nth-of-type(2)');
const menuOpenStick3 = menuOpen.querySelector('.menu-open span:nth-of-type(3)');
const menuBox = document.querySelector('.menu');
const menuList = menuBox.querySelector('.menu-list');
const CHANGE = 'change';
const HIDE = 'hide';

menuOpen.addEventListener('click', () => {
    menuOpenStick1.classList.toggle(CHANGE);
    menuOpenStick2.classList.toggle(CHANGE);
    menuOpenStick3.classList.toggle(CHANGE);
    menuBox.classList.toggle(SHOW);
    topBtn.classList.toggle(HIDE);
});

menuBox.addEventListener('click', (e) => {

    if(!menuList.contains(e.target)){
        menuOpenStick1.classList.remove(CHANGE);
        menuOpenStick2.classList.remove(CHANGE);
        menuOpenStick3.classList.remove(CHANGE);
        menuBox.classList.remove(SHOW);
        topBtn.classList.toggle(HIDE);
    }
});