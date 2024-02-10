//slider1
const slides1 = document.querySelectorAll('.slide-one'),
prev1 = document.querySelector('.ec-button-prev'),
next1 = document.querySelector('.ec-button-next');
let slideIndex1 = 1;

function showSlides(n){
    if(n>slides.length){
        slideIndex1 = 1;
    }
    if(n<1){
        slideIndex1 = slides1.length;
    }
   
    slides.forEach(item=> item.style.display="none");
    slides[slideIndex1-1].style.display ="block";
  
}
showSlides(slideIndex1);

function plusSlide(n){
    showSlides(slideIndex = slideIndex+n);
}

next.addEventListener('click',()=>{
    plusSlide(1);
})
prev.addEventListener('click',()=>{
    plusSlide(-1);
})


//slider
const slides = document.querySelectorAll('.slide-two'),
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
    slides.forEach(item=> item.style.display="none");
    slides[slideIndex-1].style.display ="block";
}
showSlides(slideIndex);

function plusSlide(n){
    showSlides(slideIndex = slideIndex+n);
}

next.addEventListener('click',()=>{
    plusSlide(1);
})
prev.addEventListener('click',()=>{
    plusSlide(-1);
})
//tab
const tabs = document.querySelectorAll('.taber');
const tabContent = document.querySelectorAll('.tab');
const tabParent = document.querySelector('.hero-menu_header');
function hideTabContent(){
    tabContent.forEach(item =>{
        item.style.display = "none";
    })
    tabs.forEach(item =>{
        item.classList.remove('current');
    })
}

function showTabContent(i=0){
     tabContent[i].style.display = 'block';
    tabs[i].classList.add('current');
}

hideTabContent();
showTabContent();

tabParent.addEventListener('click',(event)=>{
    if(event.target && event.target.classList.contains('taber')){
        tabs.forEach((item,i)=>{
            if(event.target == item){
                hideTabContent();
                showTabContent(i);
            }
        })
    }
});
console.log(tabContent);