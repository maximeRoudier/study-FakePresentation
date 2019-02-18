$(document).ready(function(){
  window.sr = ScrollReveal({ reset: true });

  sr.reveal('.reveal', {
    rotate: { x: 30, y: 30, z: 0 },
    duration: 1500
  });


   $('.anchor-scroll').anchorScroll({
      scrollSpeed: 800, // scroll speed
      offsetTop: 0, // offset for fixed top bars (defaults to 0)
      onScroll: function () {
        // callback on scroll start
      },
      scrollEnd: function () {
        // callback on scroll end
      }
   });
});
