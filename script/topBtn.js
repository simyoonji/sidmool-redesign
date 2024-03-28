const topBtn = document.querySelector(".quick");

const scrollToTop = () => {
  document.documentElement.scrollTop = 0; 
};

topBtn.addEventListener('click', scrollToTop);