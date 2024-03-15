//menu open
const menuOpen = document.querySelector('.menu-open');
const menuBox = document.querySelector('.menu');

menuOpen.addEventListener('click', () => {
    menuBox.classList.toggle('show');
});


// search
const form = document.querySelector('form');
const fieldset = form.querySelector('fieldset');

form.addEventListener('click', () => {
    fieldset.style.width = '40rem';
});
document.addEventListener('click', (e) => {
    const clickedElement = e.target;
    
    if (!form.contains(clickedElement)) {
        fieldset.style.width = '20rem';
    }
});
