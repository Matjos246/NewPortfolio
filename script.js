// var typed = Typed(".typing",{
//     strings:["Software Engineer","Web developer","Web designer","Hardware Engineer", "Graphics Designer"],
//     typeSpeed:100,
//     BackSpeed:60,
//     loop:true
// })
const swiper = new Swiper('.slider-wrapper',{
    // optional parameters
    // direction: 'vertical',
    loop: true,
    spaceBetween: 30,
    grabCursor: true,
    //if we need pagination
    pagination:{
        el:'.swiper-pagination',
        clickable:true,
        DynamicsCompressorNode:true,
        dynamicBullets:true,
    },
    //Navigation arrows
    navigation:{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    // And if we need scrollbar
    scrollbar:{
        el: '.swiper-scrollbar',
    },
    // Responsive Breakpoints
    breakpoints:{
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        }, 
        1080: {
            slidesPerView: 3
        },

         1392: {
            slidesPerView: 4
        }

    }
});

  function showSidebar(){
    const sidebar = document.querySelector(".navbar")
    sidebar.style.display = "flex"
  }
    function hideSidebar(){
    const sidebar = document.querySelector(".navbar")
    sidebar.style.display = "none"
  }

console.log("Screen width:", window.screen.width);
console.log("Viewport width:", window.innerWidth);
console.log("Viewport height:", window.innerHeight);
console.log("Device Pixel Ratio:", window.devicePixelRatio);


    document.body.insertAdjacentHTML(
        "afterbegin",
        `
        <div id="device-info" style="
            position: fixed;
            top: 0;
            left: 0;
            z-index: 99999;
            background: red;
            color: white;
            padding: 10px;
            font: 14px Arial;
        ">
            Width: ${window.innerWidth}px<br>
            Height: ${window.innerHeight}px<br>
            DPR: ${window.devicePixelRatio}
        </div>
        `
    );
