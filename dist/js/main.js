$(document).ready(function() {
  $('.design-slider').slick({
    dots: false,
    slidesToShow: 4,
    variableWidth: true,
    prevArrow: '<img class="arrow arrow-left" src="images/arrow-left.png" alt="images/arrow-lef">',
    nextArrow: '<img class="arrow arrow-right" src="images/arrow-right.png" alt="images/arrow-right">',
  });
  $('[data-fancybox="video"]').fancybox({
    youtube: {
      controls: 0,
      showinfo: 0
    },
    vimeo: {
      color: 'f00'
    }
  });
});
function openVideo() {
  $.fancybox.open({
    src: 'https://www.youtube.com/embed/q7T5rAMqyd4?autoplay=1&vq=hd1080',
    type: 'iframe',
    opts: {
      iframe: {
        preload: false
      }
    }
  });
}
let wow = new WOW(
  {
    boxClass: 'wow',     
    animateClass: 'animated', 
    offset: 0,        
    mobile: true,     
    live: true,   
    callback: function (box) {},
    scrollContainer: null,   
    resetAnimation: true,    
  }
);
wow.init();

let hamburger = document.querySelector('.hamburger');
var menu = document.querySelector('.menu__list');

if (hamburger) {
  hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('is-active');
    menu.classList.toggle('active');
  });
}
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute('href'));
      const offset = target.offsetTop - (window.innerHeight / 2 - target.clientHeight / 2);

      window.scrollTo({
          top: offset,
          behavior: 'smooth'
      });
  });
});