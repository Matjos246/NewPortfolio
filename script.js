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
    pagination: {
        el: '.swiper-pagination',
        clickable:true,
        DynamicsCompressorNode:true,
        dynamicBullets:true,
    },
    //Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    // Responsive Breakpoints
    breakpoints: {
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
  