            // ==toggle style  switcher==
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", ()=>{
    document.querySelector(".style-switcher").classList.toggle("open");
})
// hide style - switcher on scroll
window.addEventListener("scroll", ()=>{
    if(document.querySelector(".style-switcher").classList.contains("open"))
    {
        document.querySelector(".style.switcher").classList.remove("open");
    }
})
                        // ===Theme Colors===
// const alternateStyle = document.querySelectorAll(".alternate-style");
// function setActiveStyle(color){
//     localStorage.setItem("color",color);
//     changeColor();
// }
// function changeColor(){
//     alternateStyle.forEach((style)=>{
//         if(localStorage.getItem("color") === style.getAttribute("title"))
//         {
//             style.removeAttribute("disabled");
//         }
//     })
// }
const alternateStyle = document.querySelectorAll(".alternate-style");
function setActiveStyle(color){
   alternateStyle.forEach((style)=>{
        if(color=== style.getAttribute("title"))
        {
            style.removeAttribute("disabled")
        }
        else{
            style.setAttribute("disabled", "true");
        }
   })
}
                // ===Theme light-dark mode===            
    const dayNight = document.querySelector(".day-night");
    dayNight.addEventListener("click", ()=>{
        dayNight.querySelector("i").classList.toggle("fa-sun");
          dayNight.querySelector("i").classList.toggle("fa-moon");
          document.body.classList.toggle("dark")
    })
    window.addEventListener("load", ()=>{
        if(document.body.classlist.contains("dark")){
                dayNight.querySelector("i").classlist.add("fa-sun");
        }else{
                dayNight.querySelector("i").classlist.add("fa-moon");
        }
    })