'use strict';
$(function() {
  var interval;
  var count = 0;

  function imageSlider() {
    var width = 720;
    interval = setInterval(function(){
      $('.hero-images').animate({'margin-left': '-=' + width}, 1000, function(){
        count++
        if(count === 3) {
          $('.hero-images').css('margin-left',0)
          count = 0;
        }
      });
    },3000);
    };
    imageSlider();
  });
