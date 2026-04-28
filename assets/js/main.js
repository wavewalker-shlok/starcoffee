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

//  const swiperPopular = new Swiper('.popular__swiper' ,{
//   loop:true,
//   grabCursor:true,
//   spaceBetween:20,
//   slidesPerView:'auto',
//   centeredSlides:true,
//   

//   breakpoints:{
//     1150:{
//       spaceBetween:20,
//     }
//   }

//  })
const swiperPopular = new Swiper('.popular__swiper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,

  slidesPerView: 1,

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  speed: 800,

  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    
    pagination: {
  el: '.swiper-pagination',
  clickable: true,
},
  
  }
});



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

/*============== SCROLLREVEL ANIMATION ============*/ 

const sr = ScrollReveal({
  origin:'top',
  distance: '60px',
  duration: 2000,
  delay:300,

})

sr.reveal(`.popular__swiper , .footer__container, .footer__copy`)
sr.reveal(`.home__shape` , {origin:'bottom'})
sr.reveal(`.home__coffee` , {delay:1000, distance:'200px',duration:1500})
sr.reveal(`.home__splash` , {delay:1600, scale:0, duration:1500})
sr.reveal(`.home__bean-1, .home__bean-2` , {delay:2200, scale:0, duration:1500, rotate:{z:180}})
sr.reveal(`.home__ice-1, .home__ice-2` , {delay:2600, scale:0, duration:1500, rotate:{z:180}})
sr.reveal(`.home__leaf` , {delay:2800, scale:0, duration:1500, rotate:{z:90}})
sr.reveal(`.home__title` , {delay:3500 })
sr.reveal(`.home__data, .home__sticker` , {delay:4000 }) 
sr.reveal(`.about__data` , {origin:'Left'}) 
sr.reveal(`.about__images` , {origin:'right'}) 
sr.reveal(`.about__coffee` , {deplay:1000}) 
sr.reveal(`.about__leaf-1, .about__leaf-2` , {deplay:1400 , rotate:{z:90}}) 
sr.reveal(`.products__card , .contact__info` , {interval:100}) 
sr.reveal(`.contact__shape` , {delay:600 , scale:0}) 
sr.reveal(`.contact__delivery` , {delay:1200 }) 
