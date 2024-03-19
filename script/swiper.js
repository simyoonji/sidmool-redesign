const swiper = new Swiper('.swiper1', {
  direction: 'horizontal',
  grabCursor: true,
  slidesPerView: "auto",

  autoplay: {
      delay: 4000, // 4초마다 슬라이드
      disableOnInteraction: false, // 사용자 상호 작용 후에도 자동 재생 유지
  },
  loop: true, // 무한 루프 옵션 추가
  // 반응형 디자인
  breakpoints: {
    // 슬라이드가 작은 화면에서도 보여질 수 있도록 설정
    320: {
    slidesPerView: 1,
    spaceBetween: 10
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    // 더 작은 화면에서는 슬라이드가 한 번에 하나씩 보여짐
    768: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // 더 큰 화면에서는 슬라이드가 한 번에 두 개씩 보여짐
    1024: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
});

const swiper2 = new Swiper('.swiper2', {
  direction: 'horizontal',
  grabCursor: true,
  slidesPerView: "auto",

  autoplay: {
      delay: 4000, // 4초마다 슬라이드
      disableOnInteraction: false, // 사용자 상호 작용 후에도 자동 재생 유지
  },
  loop: true, // 무한 루프 옵션 추가
  // 반응형 디자인
  breakpoints: {
    // 슬라이드가 작은 화면에서도 보여질 수 있도록 설정
    320: {
    slidesPerView: 1,
    spaceBetween: 10
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    // 더 작은 화면에서는 슬라이드가 한 번에 하나씩 보여짐
    768: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // 더 큰 화면에서는 슬라이드가 한 번에 두 개씩 보여짐
    1024: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
});