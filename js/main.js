//slider1
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
        total.textContent = `0${slides1.length}`;
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
//time
//function getTimeRemaining(endtime){
  //  const t = Date.purse(endtime) - Date.purse(new Date()),
 //       days = Math.floor(t/(1000*60*60*24)),
  //      hours = Math.floor((t/(1000*60*60))%24),
  //      minutes = Math.floor((t/(1000*60*60))%60),
  //      seconds =  Math.floor((t/(1000))%60);
 //   return{
  //          'total':t,
  //          'days':days,
  //          'hours': hours,
  //          'minutes':minutes,
  //          'seconds':seconds
 //       }
//}
//function setClock(selector, endtime){
  //  const timer = document.querySelector(selector),
  //      days = document.querySelector('#days'),
  //      hours = document.querySelector('#hours'),
  //      minutes = document.querySelector('#minutes'),
  //      seconds = document.querySelector('#seconds');
  //      timeInterval = setInterval(updateClock,1000);
   // updateClock();
   // function updateClock(){
  //      const t = getTimeRemaining(endtime);
   //     days.innerHTML = t.days;
   //     hours.innerHTML = t.hours;
   //     minutes.innerHTML = t.minutes;
   //     seconds.innerHTML = t.seconds;
   //     if(t.total<=0){
    //        clearInterval()
     //       days.innerHTML = "00";
     //       hours.innerHTML = "00";
      //      minutes.innerHTML = "00";
      //      seconds.innerHTML = "00";
    //    }
   // }
//}
//updateClock('.cs-media-container',timeEnd);
