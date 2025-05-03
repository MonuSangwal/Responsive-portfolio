
// side navigation menu js code
let menuBtn =document.querySelector(".menu-btn");
let cancekBtn =document.querySelector(".cancel-btn");
let navBar =document.querySelector(".navbar");


menuBtn.onclick=function(){
    menuBtn.style.opacity="0";
    menuBtn.style.pointerEvents="none";
    navBar.classList.add("active")
}

cancekBtn.onclick=function(){
    menuBtn.style.opacity="1";
    menuBtn.style.pointerEvents="auto";
    navBar.classList.remove("active")
}


// sticky navigation menu js code
let nav =document.querySelector("nav");
let val;
window.onscroll=function(){
    if(document.documentElement.scrollTop>20){
        nav.classList.add("sticky")
    }else{
        nav.classList.remove("sticky")
    }
}