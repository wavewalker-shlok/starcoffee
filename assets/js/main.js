/*====show menu =====*/
const navMenu = document.querySelector('#nav-menu'),
      navToggle = document.querySelector('#nav-toggle'),
      navClose = document.querySelector('#nav-close');

if(navToggle){
  navToggle.addEventListener('click', ()=>{
    navMenu.classList.add('show-menu');
  })
}

if(navClose){
  navClose.addEventListener('click',()=>{
    navMenu.classList.remove('show-menu')
  })
}

/*===Removing of show menu on clcik on nav options=====*/ 

const navLink = document.querySelectorAll('.nav__link');



const linkAction = ()=> {
  const navMenu = document.querySelector('#nav-menu')
  navMenu.classList.remove('show-menu')
};

  navLink.forEach(n => n.addEventListener('click' , linkAction ));


           /*====or alternative code to do that with  function declaration */ 

// const navLink = document.querySelectorAll('.nav__link')
// function linkAction(n){
//   const navMenu = document.querySelector('#nav-menu')
//   navMenu.classList.remove('show-menu')
// }


//  navLink.forEach(function(n) {
//   n.addEventListener('click' , linkAction )
//  });



/*============== ADD SHADOW HEADER =============*/


function showheader (){
  const header = document.querySelector('#header');

  if(window.scrollY >= 50 ){
    header.classList.add('shadow-header')
  }
  else {
    header.classList.remove('shadow-header')
  }

}
window.addEventListener('scroll' , showheader);


/*========swiperPopular---========*/ 
 const swiperPopular = new Swiper('.popular__swiper' ,{
  loop:true,
  grabCursor:true,
  spaceBetween:32,
  slidesPerView:'auto',
  centeredSlides:true,

  breakpoints:{
    1150:{
      spaceBetween:80,
    }
  }

 })

/*=============== SHOW SCROLL UP ===================*/  
function  scrollUp(){
  const scrollup = document.querySelector('#scroll-up')
  if(window.scrollY>=350){
    scrollup.classList.add('show-scroll');
  }
  else{
    scrollup.classList.remove('show-scroll');
  }
} 
window.addEventListener('scroll' , scrollUp);

/*============ SCROLL SECTIONS ACTIVE LINK =========*/ 
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach(function(current) {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 58;
    const sectionId = current.getAttribute('id');

    const sectionClass = document.querySelector(
      '.nav__menu a[href="#' + sectionId + '"]'
    );

    if (sectionClass) {
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        sectionClass.classList.add('active-link');
      } else {
        sectionClass.classList.remove('active-link');
      }
    }
  });
}

window.addEventListener('scroll', scrollActive);