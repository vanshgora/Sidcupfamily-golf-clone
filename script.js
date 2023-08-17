let cursor = document.getElementById("cursor");
let cursorBack = document.getElementById("cursor-back");
let logo = document.querySelector(".logo-img");
let fndBtn = document.querySelectorAll(".fnd-btn");
let fndBtnBdr = document.querySelectorAll(".fnd-btn-bdr");
let fndImg = document.querySelectorAll(".fnd-img");
let navBtn = document.querySelector(".nav-btn");
let navBgr = document.querySelector(".nav-bgr");
let body = document.getElementsByTagName("body");
let navResponsive = document.querySelector(".nav-responsive");
let navResA = document.querySelectorAll(".nav-res-list a");

function alterImg(val) {
   for(let i = 0; i < 3; i++) {
      if (i == val) {
         fndBtnBdr[i].classList.add("fnd-btn-active");
         fndImg[i].classList.add("fnd-img-active");
      }
      else {
         fndBtnBdr[i].classList.remove("fnd-btn-active");
         fndImg[i].classList.remove("fnd-img-active");
      }
   }
}

navBtn.addEventListener("click", function() {
   navBtn.classList.toggle("nav-btn-active");
   body.style.overflow  = "hidden";
   navResponsive.classList.add("nav-res-active");
   navResponsive.style.transform = "translateY(0)";
});


navBtn.addEventListener("click", function() {
   navResponsive.classList.toggle("nav-res-active");
});

document.addEventListener("mousemove", function(dets) {
   cursor.style.left = dets.x + "px";
   cursor.style.top = dets.y + "px";
   cursorBack.style.left = dets.x - 200 + "px";
   cursorBack.style.top = dets.y - 200 + "px";
});

gsap.to("nav", {
   backgroundColor :"#000",
   duration: 0.5,
   height: "110px",
   scrollTrigger: {
      trigger:"nav",
      scroller:"body",
      // markers: true,
      start: "top -10%",
      end: "top -11%",
      scrub:1
   }
})

gsap.to("main", {
   backgroundColor: "#000",
   scrollTrigger: {
      trigger: "main",
      scroller: "body",
      // markers:true,
      start: "top -25%",
      end: "top -70%",
      scrub:2
   }
})