'use strict';
$(function() {

  /*_______Function to hide and show tab content________*/

  $('header nav ul li a').on('click', function() {
    $('.img-container').hide();
    $('main section').hide();
    var $viewSection = $(this).data('tab');
    $('#' + $viewSection).fadeIn(500);
  });

  $('header h1').on('click', function() {
    $('main section').fadeIn(500);
    $('.img-container').fadeIn(500);
  });

  $('#hamburger').on('click', function() {
    $('header nav').slideToggle();
  });

  /*__________Function for image slider_________ */
  function imageSlider() {
    var count = 0;
    var width = 1050;

    setInterval(function(){
      $('.hero-images').animate({'margin-left': '-=' + width}, 1000, function(){
        count++;
        if(count === 3) {
          $('.hero-images').css('margin-left',0);
          count = 0;
        }
      });
    },4000);
  };

  /*_________Function for handlebars_______________*/
  function compileHandlebars() {
    var handlebarsData = [
      {
        category: 'about',
        title: 'A LITTLE ABOUT MYSELF',
        content: 'Hi! My name is John and I\'m an aspiring sofware developer. After working as an engineer for several years I decided to take the next step in my career and learn software development. Contributing to others, personal growth, and continually learning are three values I try to live by every day.'
      },
      {
        category: 'experience',
        title: 'EXPERIENCE',
        content: 'My experience includes: '
      },
      {
        category: 'projects',
        title: 'Projects',
        content: 'This is the projects section'
      },
      {
        category: 'contact',
        title: 'GET IN TOUCH',
        content:''
      }
    ];
    for (var i = 0; i < handlebarsData.length; i++){
      var template = $('#template').html();
      var compileData = Handlebars.compile(template);
      $('#main').append(compileData(handlebarsData[i]));
    }
    $('#about h1').after('<img src="img/image2.jpg">');

    $('#experience p').after('<div id="icons">');
    $('#icons').append('<img src="img/postgresql-logo.png" width="63" height="64" alt="postgresql Icon">');
    $('#icons').append('<img src="img/GitHub-Mark.png" width="63" height="64" alt="GitHub Icon">');
    $('#icons').append('<img src="img/jquery-icon.png" width="63" height="64" alt="jQuery Icon">');
    $('#icons').append('<img src="img/nodejs-512.png" width="63" height="64" alt="nodeJS Icon">');
    $('#icons').append('<img src="img/handlebars.png" width="63" height="64" alt="handlebars Icon">');
    $('#icons').append('<img src="img/javascript.png" width="63" height="64" alt="JS Icon">');
    $('#icons').append('<img src="img/css3.png" width="63" height="64" alt="CCS3 Icon">');
    $('#icons').append('<img src="img/HTML5_Logo_256.png" width="63" height="64" alt="HTML5 Powered" title="HTML5 Powered">');
    $('#experience p').after('</div>');
  }

  function compileProjectHandlebars() {
    function Project(data) {
      this.title = data.title;
      this.date = data.date;
      this.about = data.about;
      this.img = data.img;
      Project.all.push(this);
    }
    Project.all = [];
    $.getJSON('data/projects.json').then(function(data){
      data.forEach(function(val){
        new Project(val);
        var projectTemplate = $('#project-template').html();
        var compileData  = Handlebars.compile(projectTemplate);
        $('#projects').append(compileData(val));
      });
    });

    $('#algorithm-teacher img').append('<a href=https://jensjoh01.github.io/algorithm-teacher/');
  }

  compileHandlebars();
  compileProjectHandlebars();
  imageSlider();
});
