//slider
const slides1 = document.querySelectorAll('.container'),
prev1 = document.querySelector('.ec-button-prev'),
next1 = document.querySelector('.tc-button-next');
let slideIndex1 = 1;

function showSlides(n){
    if(n>slides.length){
        slideIndex1 = 1;
    }
    if(n<1){
        slideIndex1 = slides1.length;
    }
    if(slides1.length <10){
        total.textContent = `0${slides.length}`;
    }else{
        total.textContent = slides1.length;
    }
    slides.forEach(item=> item.style.display="none");
    slides[slideIndex1-1].style.display ="block";

    if(slides.length<10){
        current.textContent = `0${slideIndex1}`;
    }else{
        current.textContent = slideIndex1;
    }
}

//slider
const slides = document.querySelectorAll('.swiper-slide'),
prev = document.querySelector('.tc-button-prev'),
next = document.querySelector('.tc-button-next');

let slideIndex = 1;

function showSlides(n){
    if(n>slides.length){
        slideIndex = 1;
    }
    if(n<1){
        slideIndex = slides.length;
    }
    if(slides.length <10){
        total.textContent = `0${slides.length}`;
    }else{
        total.textContent = slides.length;
    }
    slides.forEach(item=> item.style.display="none");
    slides[slideIndex-1].style.display ="block";

    if(slides.length<10){
        current.textContent = `0${slideIndex}`;
    }else{
        current.textContent = slideIndex;
    }
}
