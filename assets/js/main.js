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
 