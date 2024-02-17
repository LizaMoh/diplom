//slider1
if(document.querySelector('.slide-one')){
    const slides1 = document.querySelectorAll('.slide-one'),
    prev1 = document.querySelector('.ec-button-prev'),
    next1 = document.querySelector('.ec-button-next');
    let slideIndex1 = 1;
    
    function showSlides(n){
        if(n>slides1.length){
            slideIndex1 = 1;
        }
        if(n<1){
            slideIndex1 = slides1.length;
        }
       
        slides1.forEach(item=> item.style.display="none");
        slides1[slideIndex1-1].style.display ="block";
      
    }
    showSlides(slideIndex1);
    
    function plusSlide(n){
        showSlides(slideIndex1 = slideIndex1+n);
    }
    
    next1.addEventListener('click',()=>{
        plusSlide(1);
    })
    prev1.addEventListener('click',()=>{
        plusSlide(-1);
    })
}


//slider
if(document.querySelector('.slide-two')){
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
}

//tab
if(document.querySelector('.taber')){
    const tabs = document.querySelectorAll('.taber');
    const tabContent = document.querySelectorAll('.tab-content');
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
}
//time
if(document.querySelector('.countdown')){
    const timeEnd = '2024-02-19';

function getTimeRemaining(endtime){
    const t = Date.parse(endtime) - Date.parse(new Date()),
        days = Math.floor(t/(1000*60*60*24)),
        hours = Math.floor((t/(1000*60*60))%24),
        minutes = Math.floor((t/(1000*60))%60),
        seconds = Math.floor((t/(1000))%60);
    return{
        'total':t,
        'days':days,
        'hours':hours,
        'minutes':minutes,
        'seconds':seconds
    }
}
function setClock(selector,endtime){
    const timer = document.querySelector(selector),
         days = document.querySelector('.days'),
         hours = document.querySelector('.hours'),
         minutes = document.querySelector('.minutes'),
         seconds = document.querySelector('.seconds');
         timeInterval = setInterval(updateClock,1000);
    updateClock();
    function updateClock(){
        const t = getTimeRemaining(endtime);
        days.innerHTML = t.days;
        hours.innerHTML = t.hours;
        minutes.innerHTML = t.minutes;
        seconds.innerHTML = t.seconds;
        if(t.total<=0){
            clearInterval(timeInterval);
            days.innerHTML = "00";
            hours.innerHTML = "00";
            minutes.innerHTML = "00";
            seconds.innerHTML = "00";
        }
    }
}
setClock('.countdown',timeEnd);

}
//tab
if(document.querySelector('taberr')){
    const tabs1 = document.querySelectorAll('.taberr');
    const tabContent1 = document.querySelectorAll('.tab-content');
    const tabParent1 = document.querySelector('.hero-menu_content');
    function hideTabContent(){
        tabContent1.forEach(item =>{
            item.style.display = "none";
        })
        tabs1.forEach(item =>{
            item.classList.remove('current');
        })
    }
    
    function showTabContent(i=0){
         tabContent1[i].style.display = 'block';
        tabs1[i].classList.add('current');
    }
    
    hideTabContent();
    showTabContent();
    
    tabParent1.addEventListener('click',(event)=>{
        if(event.target && event.target.classList.contains('taberr')){
            tabs1.forEach((item,i)=>{
                if(event.target == item){
                    hideTabContent();
                    showTabContent(i);
                }
            })
        }
    });
    console.log(tabContent1);
}
