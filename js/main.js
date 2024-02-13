$(function () {
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
    boxClass: 'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset: 0,          // distance to the element when triggering the animation (default is 0)
    mobile: true,       // trigger animations on mobile devices (default is true)
    live: true,       // act on asynchronously loaded content (default is true)
    callback: function (box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null,    // optional scroll container selector, otherwise use window,
    resetAnimation: true,     // reset animation on end (default is true)
  }
);
wow.init();
