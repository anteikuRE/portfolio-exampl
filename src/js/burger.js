"use strict";

const burgerOpen = function () {
  const burger = document.querySelector(".burger");
  const navText = document.querySelectorAll(".nav-text");
  burger.addEventListener("click", function () {
    burger.classList.toggle("active");
    navText.forEach((e) => {
      if (burger.classList.contains("active")) {
        e.style.transition = "all 1s";
        setTimeout(() => {
          e.style.opacity = "1";
        }, 60);
        setTimeout(() => {
          e.style.display = "flex";
        }, 10);
      } else {
        e.style.opacity = "0";
        e.style.display = "none";
      }
    });
  });
};
burgerOpen();

const observer = new IntersectionObserver((e) => {
  e.forEach((e) => {
    console.log(e);
    if (e.isIntersecting) {
      e.target.classList.add("show");
    }
    // } else {
    //   e.target.classList.remove("show");
    // }
  });
});

const hidden = document.querySelectorAll(".hidden");
hidden.forEach((el) => {
  observer.observe(el);
});
