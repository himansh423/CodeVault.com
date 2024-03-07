const btn = document.querySelector("i");
let sec1 = document.querySelector(".video-container");
const sec2 = document.querySelector(".second-page");
const blank = document.querySelector(".blank");
const parent = document.querySelector(".parent"); 
const body = document.querySelector("body");
const logoTrans = document.querySelector(".logo-trans");
const description1 = document.querySelector(".description")


btn.addEventListener("click",() => {
     sec2.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest", duration: 2000 });
});


let scrollBreakdown = 400;
let intPos = 0;


// event listener for scroll event
window.addEventListener('scroll', function() {
     //  current scroll position
     let scrollPosition = window.scrollY;
     
      if (scrollPosition > scrollBreakdown) {
          blank.classList.add("animation-trans");
          parent.classList.add("animation-trans2");
          description1.classList.add("textanime");
          description1.classList.remove("back-textanime");
          blank.classList.remove("back-animation-trans");
          parent.classList.remove("back-animation-trans2");
      }
      else {
          blank.classList.add("back-animation-trans");
          parent.classList.add("back-animation-trans2");
          description1.classList.add("back-textanime");
          description1.classList.remove("textanime");
          blank.classList.remove("animation-trans");
          parent.classList.remove("animation-trans2");
      }
 });
 
