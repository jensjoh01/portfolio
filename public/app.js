'use strict';

$(function() {

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
  }

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


  function getGitHubAPI() {

    $.get('/github/user/repos').then(data => data.forEach(function(repoData) {
      $.get(repoData.commits_url.slice(0,-6)).then(function(commitData) {

        // This adds a new key value pair in my repo object for the length
        repoData.number_of_commits = commitData.length;

        var messageLength = 0;

        commitData.forEach(function(data){
          messageLength += data.commit.message.match(/\b\w+/g).length;
        });
        var avgLength = Math.round(messageLength/commitData.length);

        // Adds a key value pair for average commit length
        repoData.average_commit_length = avgLength;

        var repoTemplate = $('#repo-template').html();
        var compileData  = Handlebars.compile(repoTemplate);
        $('#projects').append(compileData(repoData));
        $('#num-commits').append(compileData(commitData.length));
      });
    }),
      err => console.error(err)).then();
  }

  compileHandlebars();
  getGitHubAPI();
  imageSlider();
});
