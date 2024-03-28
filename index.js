const btn1 = document.querySelector("#tap1");
const btn2 = document.querySelector("#tap2");
const btn3 = document.querySelector("#tap3");
const btn4 = document.querySelector("#tap4");
const btn5 = document.querySelector("#tap5");
const btn6 = document.querySelector("#tap6");
const btn7 = document.querySelector("#tap7");
const btn8 = document.querySelector("#tap8");
const btn9 = document.querySelector("#tap9");
const sec1 = document.querySelector(".video-container");
const sec2 = document.querySelector(".second-page");
const sec3 = document.querySelector(".third-page");
const sec4 = document.querySelector(".fourth-page");
const sec5 = document.querySelector(".fifth-page");
const sec6 = document.querySelector(".sixth-page");
const sec7 = document.querySelector(".seventh-page");
const sec8 = document.querySelector(".eighth-page");
const sec9 = document.querySelector(".nineth-page");
const blank = document.querySelector(".blank");
const blankCSS = document.querySelector(".blankCSS");
const blankJS = document.querySelector(".blankJS");
const blankBS = document.querySelector(".blankBS");
const blankRJS = document.querySelector(".blankRJS");
const blankNJS = document.querySelector(".blankNJS");
const blankSQL = document.querySelector(".blankSQL");
const blankDB = document.querySelector(".blankDB");
const parent = document.querySelector(".parent");
const parentCSS = document.querySelector(".parentCSS");
const parentJS = document.querySelector(".parentJS");
const parentBS = document.querySelector(".parentBS");
const parentRJS = document.querySelector(".parentRJS");
const parentNJS = document.querySelector(".parentNJS");
const parentSQL = document.querySelector(".parentSQL");
const parentDB = document.querySelector(".parentDB");
const body = document.querySelector("body");
const logoTrans = document.querySelector(".logo-trans");
const logoTransCSS = document.querySelector(".logo-transCSS");
const logoTransJS = document.querySelector(".logo-transJS");
const logoTransBS = document.querySelector(".logo-transBS");
const logoTransRJS = document.querySelector(".logo-transRJS");
const logoTransNJS = document.querySelector(".logo-transNJS");
const logoTransSQL = document.querySelector(".logo-transSQL");
const logoTransDB = document.querySelector(".logo-transDB");
const description1 = document.querySelector(".description");
const description2 = document.querySelector(".descriptionCSS");
const description3 = document.querySelector(".descriptionJS");
const description4 = document.querySelector(".descriptionBS");
const description5 = document.querySelector(".descriptionRJS");
const description6 = document.querySelector(".descriptionNJS");
const description7 = document.querySelector(".descriptionSQL");
const description8 = document.querySelector(".descriptionDB");

btn1.addEventListener("click", () => {
  sec2.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
    duration: 2000,
  });
});
btn2.addEventListener("click", () => {
  sec3.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
    duration: 2000,
  });
});
btn3.addEventListener("click", () => {
  sec4.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
    duration: 2000,
  });
});
btn4.addEventListener("click", () => {
  sec5.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
    duration: 2000,
  });
});
btn5.addEventListener("click", () => {
  sec6.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
    duration: 2000,
  });
});
btn6.addEventListener("click", () => {
  sec7.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
    duration: 2000,
  });
});
btn7.addEventListener("click", () => {
  sec8.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
    duration: 2000,
  });
});
btn8.addEventListener("click", () => {
  sec9.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
    duration: 2000,
  });
});
btn9.addEventListener("click", () => {
  sec1.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
    duration: 2000,
  });
});

function detectViewportWidth() {
  const viewPortWidth = window.innerWidth;
  // for responsiveness
  if (  viewPortWidth < 2560 && viewPortWidth > 1025  ) {
    let scrollpt1 = 400;
    let scrollpt2 = 1100;
    let scrollpt3 = 1900;
    let scrollpt4 = 2500;
    let scrollpt5 = 3200;
    let scrollpt6 = 4000;
    let scrollpt7 = 4700;
    let scrollpt8 = 5400;

    // /2nd page
    window.addEventListener("scroll", function () {
      //  current scroll position
      let scrollPosition = window.scrollY;

      if (scrollPosition > scrollpt1) {
        blank.classList.add("animation-trans");
        parent.classList.add("animation-trans2");
        description1.classList.add("textanime");
        description1.classList.remove("back-textanime");
        blank.classList.remove("back-animation-trans");
        parent.classList.remove("back-animation-trans2");
      } else {
        blank.classList.add("back-animation-trans");
        parent.classList.add("back-animation-trans2");
        description1.classList.add("back-textanime");
        description1.classList.remove("textanime");
        blank.classList.remove("animation-trans");
        parent.classList.remove("animation-trans2");
      }
    });

    // 3rd page
    window.addEventListener("scroll", function () {
      //  current scroll position
      let scrollPosition2 = window.scrollY;

      if (scrollPosition2 > scrollpt2) {
        blankCSS.classList.add("animation-transCSS");
        parentCSS.classList.add("animation-trans2CSS");
        description2.classList.add("textanimeCSS");
        description2.classList.remove("back-textanimeCSS");
        blankCSS.classList.remove("back-animation-transCSS");
        parentCSS.classList.remove("back-animation-trans2CSS");
      } else {
        blankCSS.classList.add("back-animation-transCSS");
        parentCSS.classList.add("back-animation-trans2CSS");
        description2.classList.add("back-textanimeCSS");
        description2.classList.remove("textanimeCSS");
        blankCSS.classList.remove("animation-transCSS");
        parentCSS.classList.remove("animation-trans2CSS");
      }
    });

    //  4th page
    window.addEventListener("scroll", function () {
      //  current scroll position
      let scrollPosition = window.scrollY;

      if (scrollPosition > scrollpt3) {
        blankJS.classList.add("animation-transJS");
        parentJS.classList.add("animation-trans2JS");
        description3.classList.add("textanimeJS");
        description3.classList.remove("back-textanimeJS");
        blankJS.classList.remove("back-animation-transJS");
        parentJS.classList.remove("back-animation-trans2JS");
      } else {
        blankJS.classList.add("back-animation-transJS");
        parentJS.classList.add("back-animation-trans2JS");
        description3.classList.add("back-textanimeJS");
        description3.classList.remove("textanimeJS");
        blankJS.classList.remove("animation-transJS");
        parentJS.classList.remove("animation-trans2JS");
      }
    });

    // 5th page
    window.addEventListener("scroll", function () {
      //  current scroll position
      let scrollPosition2 = window.scrollY;

      if (scrollPosition2 > scrollpt4) {
        blankBS.classList.add("animation-transBS");
        parentBS.classList.add("animation-trans2BS");
        description4.classList.add("textanimeBS");
        description4.classList.remove("back-textanimeBS");
        blankBS.classList.remove("back-animation-transBS");
        parentBS.classList.remove("back-animation-trans2BS");
      } else {
        blankBS.classList.add("back-animation-transBS");
        parentBS.classList.add("back-animation-trans2BS");
        description4.classList.add("back-textanimeBS");
        description4.classList.remove("textanimeBS");
        blankBS.classList.remove("animation-transBS");
        parentBS.classList.remove("animation-trans2BS");
      }
    });

    // sixth page
    window.addEventListener("scroll", function () {
      //  current scroll position
      let scrollPosition = window.scrollY;

      if (scrollPosition > scrollpt5) {
        blankRJS.classList.add("animation-transRJS");
        parentRJS.classList.add("animation-trans2RJS");
        description5.classList.add("textanimeRJS");
        description5.classList.remove("back-textanimeRJS");
        blankRJS.classList.remove("back-animation-transRJS");
        parentRJS.classList.remove("back-animation-trans2RJS");
      } else {
        blankRJS.classList.add("back-animation-transRJS");
        parentRJS.classList.add("back-animation-trans2RJS");
        description5.classList.add("back-textanimeRJS");
        description5.classList.remove("textanimeRJS");
        blankRJS.classList.remove("animation-transRJS");
        parentRJS.classList.remove("animation-trans2RJS");
      }
    });

    // seventh page

    window.addEventListener("scroll", function () {
      //  current scroll position
      let scrollPosition2 = window.scrollY;

      if (scrollPosition2 > scrollpt6) {
        blankNJS.classList.add("animation-transNJS");
        parentNJS.classList.add("animation-trans2NJS");
        description6.classList.add("textanimeNJS");
        description6.classList.remove("back-textanimeNJS");
        blankNJS.classList.remove("back-animation-transNJS");
        parentNJS.classList.remove("back-animation-trans2NJS");
      } else {
        blankNJS.classList.add("back-animation-transNJS");
        parentNJS.classList.add("back-animation-trans2NJS");
        description6.classList.add("back-textanimeNJS");
        description6.classList.remove("textanimeNJS");
        blankNJS.classList.remove("animation-transNJS");
        parentNJS.classList.remove("animation-trans2NJS");
      }
    });

    // eighth page

    window.addEventListener("scroll", function () {
      //  current scroll position
      let scrollPosition = window.scrollY;

      if (scrollPosition > scrollpt7) {
        blankSQL.classList.add("animation-transSQL");
        parentSQL.classList.add("animation-trans2SQL");
        description7.classList.add("textanimeSQL");
        description7.classList.remove("back-textanimeSQL");
        blankSQL.classList.remove("back-animation-transSQL");
        parentSQL.classList.remove("back-animation-trans2SQL");
      } else {
        blankSQL.classList.add("back-animation-transSQL");
        parentSQL.classList.add("back-animation-trans2SQL");
        description7.classList.add("back-textanimeSQL");
        description7.classList.remove("textanimeSQL");
        blankSQL.classList.remove("animation-transSQL");
        parentSQL.classList.remove("animation-trans2SQL");
      }
    });

    // 9th page
    window.addEventListener("scroll", function () {
      //  current scroll position
      let scrollPosition2 = window.scrollY;

      if (scrollPosition2 > scrollpt8) {
        blankDB.classList.add("animation-transDB");
        parentDB.classList.add("animation-trans2DB");
        description8.classList.add("textanimeDB");
        description8.classList.remove("back-textanimeDB");
        blankDB.classList.remove("back-animation-transDB");
        parentDB.classList.remove("back-animation-trans2DB");
      } else {
        blankDB.classList.add("back-animation-transDB");
        parentDB.classList.add("back-animation-trans2DB");
        description8.classList.add("back-textanimeDB");
        description8.classList.remove("textanimeDB");
        blankDB.classList.remove("animation-transDB");
        parentDB.classList.remove("animation-trans2DB");
      }
    });
  }

  // small laptop responsiveness
  else if (viewPortWidth < 1025 && viewPortWidth > 700) {
    let scrollpt1 = 400;
    let scrollpt2 = 1100;
    let scrollpt3 = 1900;
    let scrollpt4 = 2500;
    let scrollpt5 = 3200;
    let scrollpt6 = 3500;
    let scrollpt7 = 4200;
    let scrollpt8 = 4800;

    // /2nd page
    window.addEventListener("scroll", function () {
      //  current scroll position
      let scrollPosition = window.scrollY;

      if (scrollPosition > scrollpt1) {
        blank.classList.add("animation-trans");
        parent.classList.add("animation-trans2");
        description1.classList.add("textanime");
        description1.classList.remove("back-textanime");
        blank.classList.remove("back-animation-trans");
        parent.classList.remove("back-animation-trans2");
      } else {
        blank.classList.add("back-animation-trans");
        parent.classList.add("back-animation-trans2");
        description1.classList.add("back-textanime");
        description1.classList.remove("textanime");
        blank.classList.remove("animation-trans");
        parent.classList.remove("animation-trans2");
      }
    });

    // 3rd page
    window.addEventListener("scroll", function () {
      //  current scroll position
      let scrollPosition2 = window.scrollY;

      if (scrollPosition2 > scrollpt2) {
        blankCSS.classList.add("animation-transCSS");
        parentCSS.classList.add("animation-trans2CSS");
        description2.classList.add("textanimeCSS");
        description2.classList.remove("back-textanimeCSS");
        blankCSS.classList.remove("back-animation-transCSS");
        parentCSS.classList.remove("back-animation-trans2CSS");
      } else {
        blankCSS.classList.add("back-animation-transCSS");
        parentCSS.classList.add("back-animation-trans2CSS");
        description2.classList.add("back-textanimeCSS");
        description2.classList.remove("textanimeCSS");
        blankCSS.classList.remove("animation-transCSS");
        parentCSS.classList.remove("animation-trans2CSS");
      }
    });

    //  4th page
    window.addEventListener("scroll", function () {
      //  current scroll position
      let scrollPosition = window.scrollY;

      if (scrollPosition > scrollpt3) {
        blankJS.classList.add("animation-transJS");
        parentJS.classList.add("animation-trans2JS");
        description3.classList.add("textanimeJS");
        description3.classList.remove("back-textanimeJS");
        blankJS.classList.remove("back-animation-transJS");
        parentJS.classList.remove("back-animation-trans2JS");
      } else {
        blankJS.classList.add("back-animation-transJS");
        parentJS.classList.add("back-animation-trans2JS");
        description3.classList.add("back-textanimeJS");
        description3.classList.remove("textanimeJS");
        blankJS.classList.remove("animation-transJS");
        parentJS.classList.remove("animation-trans2JS");
      }
    });

    // 5th page
    window.addEventListener("scroll", function () {
      //  current scroll position
      let scrollPosition2 = window.scrollY;

      if (scrollPosition2 > scrollpt4) {
        blankBS.classList.add("animation-transBS");
        parentBS.classList.add("animation-trans2BS");
        description4.classList.add("textanimeBS");
        description4.classList.remove("back-textanimeBS");
        blankBS.classList.remove("back-animation-transBS");
        parentBS.classList.remove("back-animation-trans2BS");
      } else {
        blankBS.classList.add("back-animation-transBS");
        parentBS.classList.add("back-animation-trans2BS");
        description4.classList.add("back-textanimeBS");
        description4.classList.remove("textanimeBS");
        blankBS.classList.remove("animation-transBS");
        parentBS.classList.remove("animation-trans2BS");
      }
    });

    // sixth page
    window.addEventListener("scroll", function () {
      //  current scroll position
      let scrollPosition = window.scrollY;

      if (scrollPosition > scrollpt5) {
        blankRJS.classList.add("animation-transRJS");
        parentRJS.classList.add("animation-trans2RJS");
        description5.classList.add("textanimeRJS");
        description5.classList.remove("back-textanimeRJS");
        blankRJS.classList.remove("back-animation-transRJS");
        parentRJS.classList.remove("back-animation-trans2RJS");
      } else {
        blankRJS.classList.add("back-animation-transRJS");
        parentRJS.classList.add("back-animation-trans2RJS");
        description5.classList.add("back-textanimeRJS");
        description5.classList.remove("textanimeRJS");
        blankRJS.classList.remove("animation-transRJS");
        parentRJS.classList.remove("animation-trans2RJS");
      }
    });

    // seventh page

    window.addEventListener("scroll", function () {
      //  current scroll position
      let scrollPosition2 = window.scrollY;

      if (scrollPosition2 > scrollpt6) {
        blankNJS.classList.add("animation-transNJS");
        parentNJS.classList.add("animation-trans2NJS");
        description6.classList.add("textanimeNJS");
        description6.classList.remove("back-textanimeNJS");
        blankNJS.classList.remove("back-animation-transNJS");
        parentNJS.classList.remove("back-animation-trans2NJS");
      } else {
        blankNJS.classList.add("back-animation-transNJS");
        parentNJS.classList.add("back-animation-trans2NJS");
        description6.classList.add("back-textanimeNJS");
        description6.classList.remove("textanimeNJS");
        blankNJS.classList.remove("animation-transNJS");
        parentNJS.classList.remove("animation-trans2NJS");
      }
    });

    // eighth page

    window.addEventListener("scroll", function () {
      //  current scroll position
      let scrollPosition = window.scrollY;

      if (scrollPosition > scrollpt7) {
        blankSQL.classList.add("animation-transSQL");
        parentSQL.classList.add("animation-trans2SQL");
        description7.classList.add("textanimeSQL");
        description7.classList.remove("back-textanimeSQL");
        blankSQL.classList.remove("back-animation-transSQL");
        parentSQL.classList.remove("back-animation-trans2SQL");
      } else {
        blankSQL.classList.add("back-animation-transSQL");
        parentSQL.classList.add("back-animation-trans2SQL");
        description7.classList.add("back-textanimeSQL");
        description7.classList.remove("textanimeSQL");
        blankSQL.classList.remove("animation-transSQL");
        parentSQL.classList.remove("animation-trans2SQL");
      }
    });

    // 9th page
    window.addEventListener("scroll", function () {
      //  current scroll position
      let scrollPosition2 = window.scrollY;

      if (scrollPosition2 > scrollpt8) {
        blankDB.classList.add("animation-transDB");
        parentDB.classList.add("animation-trans2DB");
        description8.classList.add("textanimeDB");
        description8.classList.remove("back-textanimeDB");
        blankDB.classList.remove("back-animation-transDB");
        parentDB.classList.remove("back-animation-trans2DB");
      } else {
        blankDB.classList.add("back-animation-transDB");
        parentDB.classList.add("back-animation-trans2DB");
        description8.classList.add("back-textanimeDB");
        description8.classList.remove("textanimeDB");
        blankDB.classList.remove("animation-transDB");
        parentDB.classList.remove("animation-trans2DB");
      }
    });
  }

  // mobile responsiveness
  else if(viewPortWidth < 427 && viewPortWidth > 0) {
    const burger = document.querySelector(".childbur");
    const navCross = document.querySelector(".navigationBur");
    const crossX = document.querySelector(".crossX")
    burger.addEventListener("click", () => {
       navCross.classList.add("navAnime");
       navCross.classList.remove("navAnimeBack");
       body.style.position = "fixed";
    });
    crossX.addEventListener("click", () => {
      navCross.classList.add("navAnimeBack");
      navCross.classList.remove("navAnime");
      body.style.position = "relative";
    });
    
    
  }
}

window.addEventListener("resize", detectViewportWidth);
detectViewportWidth();
