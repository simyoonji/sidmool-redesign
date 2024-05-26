
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