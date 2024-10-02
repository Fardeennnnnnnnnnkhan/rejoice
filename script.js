function cursormove(){

  let front = document.querySelector(".page1-front")
  
   let cursor = document.querySelector(".cursor")
  
   front.addEventListener("mousemove",(e)=>{
    gsap.to(cursor,{
      x:e.x,
      y:e.y,
    })
   })
  
   front.addEventListener("mouseenter",()=>{
  gsap.to(cursor,{
      scale:1,
  })
   })
   front.addEventListener("mouseleave",()=>{
      gsap.to(cursor,{
          scale:0,
      })
   })
}
cursormove()

function swiperjs(){

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: true,
    },
  
  });

}

swiperjs()
 
function load(){

  let load = document.querySelector("#loader")
  setTimeout(() => {
    load.style.opacity= "0";
  }, 2000);
}
load()

// function locomotive(){

//   gsap.registerPlugin(ScrollTrigger);
  
  
//   const locoScroll = new LocomotiveScroll({
//     el: document.querySelector(".main"),
//     smooth: true
//   });
//   locoScroll.on("scroll", ScrollTrigger.update);
  
//   ScrollTrigger.scrollerProxy(".main", {
//     scrollTop(value) {
//       return arguments.length ? locoScroll.scrollTo(value, {duration: 0, disableLerp: true}) : locoScroll.scroll.instance.scroll.y;
//     }, 
//     getBoundingClientRect() {
//       return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//     },
//     pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
//   });
  
//   ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
//   ScrollTrigger.defaults({ scroller: ".main" });
  
//   ScrollTrigger.refresh();
// }

// locomotive()


function  menuIcon (){
let menu = document.querySelector("nav h4")
let fixImg = document.querySelector(".fixed")
let close = document.querySelector(".close h3")
menu.addEventListener("click",()=>{
  fixImg.style.top="0%"
})
close.addEventListener("click",()=>{
  fixImg.style.top="-100%"

})
}

menuIcon()
