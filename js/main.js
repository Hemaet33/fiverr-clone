const mynav=document.querySelector('.mynav');
const search=document.querySelector('.mynav .dip');
const bottomnav=document.querySelector('.bottom-nav');
const slid=document.querySelectorAll('.slid');
console.log(slid[0]);
console.log(slid[1]);

window.addEventListener('scroll',()=>{
  if(scrollY>0){
    mynav.classList.add('scrollEffect');
    
  }else{
    mynav.classList.remove('scrollEffect');
    
  }
  if(scrollY>150){
    search.classList.add('df');
    bottomnav.classList.add('bottom-nav-scroll');
  }else{
    search.classList.remove('df');
    bottomnav.classList.remove('bottom-nav-scroll');
  }
});

let i=0;
function slideshow(){
  if(i<1){
    
    slid[i].style.opacity=1;
    slid[i+slid.length-1].style.opacity=0;
  }else{
    slid[i].style.opacity=1;
    slid[i-1].style.opacity=0;
  }
  if(i<slid.length-1){
    i++;
  }else {
    i=0;
  }
  setTimeout("slideshow()",5000)
}

window.onload=slideshow;


const leftArrow = document.querySelector('.popular-services .services .service-arrow.left');
const rightArrow = document.querySelector('.popular-services .services .service-arrow.right');
const services = document.querySelector('.services');


leftArrow.addEventListener('click',()=>{
  if(services.scrollLeft<0){
    services.scrollLeft +=services.offsetWidth+10;
  }else{
    services.scrollLeft +=-services.offsetWidth+10;
  }
  
  services.style.scrollBehavior="smooth";
})
rightArrow.addEventListener('click',()=>{
  if(services.scrollLeft<0){
    services.scrollLeft += -services.offsetWidth-10;
  }else{
    services.scrollLeft += services.offsetWidth-10;
  }
  
  services.style.scrollBehavior="smooth";
})