const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.slider img');

const prev = document.querySelector("#prevbutton");
const next = document.querySelector("#nextbutton");

let counter =1;
const size = images[0].clientWidth;

slider.style.transform = 'translateX('+(-size*counter)+'px';

next.addEventListener('click',()=>{
    console.log("Next")
    if(counter >= images.length - 1)return;
    slider.style.transition = "transform 0.4s ease-in-out";
    counter++;
    slider.style.transform = 'translateX('+(-size*counter)+'px';
});

prev.addEventListener('click',()=>{
    console.log("prev")
    if(counter<=0)return;
    slider.style.transition = "transform 0.4s ease-in-out";
    counter--;
    slider.style.transform = 'translateX('+(-size*counter)+'px';
});

slider.addEventListener('transitionend',()=>{
   
    if(images[counter].id === 'last_clone'){
        slider.style.transition = "none";
        counter = images.length-2;
        slider.style.transform = 'translateX('+(-size*counter)+'px';
    }
    
});

slider.addEventListener('transitionend',()=>{
    
    if(images[counter].id === 'first_clone'){
        slider.style.transition = "none";
        counter = images.length-counter;
        slider.style.transform = 'translateX('+(-size*counter)+'px';
    }
    
});