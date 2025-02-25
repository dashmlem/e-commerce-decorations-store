var swiper = new Swiper(".mySwiper", {
  loop: true,
  effect: "fade",
  autoplay: {
    delay: 2500,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 250) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

var swiper = new Swiper(".productSwiper", {
  loop: true,
  effect: "fade",
  autoplay: {
    delay: 1500,
  },
});
var swiper = new Swiper(".testSwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 4000,
  },
  breakpoints: {
    10: {
      slidesPerView: 1,
      spaceBetween: 24,
      resistanceRatio: 0.85,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 28,
      resistanceRatio: 0.85,
    },
    980: {
      slidesPerView: 3,
      spaceBetween: 28,
      resistanceRatio: 0.85,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 32,
      resistanceRatio: 0,
    },
  },
});

const topBtn = document.getElementById("backToTop");

window.onscroll = function () {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};

topBtn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

window.addEventListener("load", function () {
  var modal = new bootstrap.Modal(document.getElementById("exampleModal"));
  modal.show();
});
