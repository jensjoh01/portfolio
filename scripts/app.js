'use strict';
$(function() {

  var interval;
  var count = 0;
  var width = 1020;

  $('main section').hide();

  $('header nav ul li a').on('click', function() {
    $('.img-container').hide();
    $('main section').hide();
    var $viewSection = $(this).data('tab');
    $('#' + $viewSection).fadeIn(500);
  });

  $('header h1').on('click', function() {
    $('main section').hide();
    $('.img-container').fadeIn(500);
  });

  function imageSlider() {
    interval = setInterval(function(){
      $('.hero-images').animate({'margin-left': '-=' + width}, 1000, function(){
        count++;
        if(count === 3) {
          $('.hero-images').css('margin-left',0);
          count = 0;
        }
      });
    },4000);
  };

  imageSlider();
});
