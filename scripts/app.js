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

/*______Function to toggle hamburger button______*/

$(function() {
  $('#hamburger').on('click', function() {
    $('header nav').slideToggle();
  });
});


/*_________________This is a function to try and change the slide functionality_____*/
// $(function() {
//   var interval;
//   var count = 1;
//   function imageSlider() {
//   interval = setInterval(function() {
//     $('#image' + count).animate({'margin-left': '-' + 1020}, 1000, function() {
//       count++;
//       if (count === ) {
//         count = 0;
//         $('.hero-image img').css('margin-left', 0);
//       }
//     })
//   },1000);
//   }
//   imageSlider();
// });
