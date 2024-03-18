const swiper = new Swiper('.swiper', {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",

    autoplay: {
      delay: 4000, // 4초마다 슬라이드
      disableOnInteraction: false, // 사용자 상호 작용 후에도 자동 재생 유지
    },
    
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    }
});