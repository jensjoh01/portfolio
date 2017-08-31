'use strict';
var app = app || {};

(function (module) {

  const aboutController = {};
  const experienceController = {};
  const projectsController = {};
  const homeController = {};
  const contactController = {};

  aboutController.init = function() {
    $('.img-container').hide();
    $('main section').hide();
    $('#about').fadeIn(500);
  }

  experienceController.init = function() {
    $('.img-container').hide();
    $('main section').hide();
    $('#experience').fadeIn(500);
  }

  projectsController.init = function() {
    $('.img-container').hide();
    $('main section').hide();
    $('#projects').fadeIn(500);
    $('#algorithm-teacher').fadeIn(500);
    $('#urban-sherpa').fadeIn(500);
  }

  homeController.init = function() {
    $('main section').fadeIn(500);
    $('.img-container').fadeIn(500);
  }

  contactController.init = function() {
    $('.img-container').hide();
    $('main section').hide();
  }

  module.projectsController = projectsController;
  module.experienceController = experienceController;
  module.aboutController = aboutController;
  module.contactController = contactController;
  module.homeController = homeController;
})(app)
