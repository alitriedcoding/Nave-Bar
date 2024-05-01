const iconEl = document.querySelector(".icon-menu");
const menuEl = document.querySelector(".menu");



iconEl.addEventListener("click",()=>{
    menuEl.classList.toggle("show-menu");
});

