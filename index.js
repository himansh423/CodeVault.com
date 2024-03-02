let btn = document.querySelector("i");
let sec2 = document.querySelector(".second-page");



btn.addEventListener("click",() => {
     sec2.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest", duration: 2000 });
});