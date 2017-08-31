'use strict';

page('/about', app.aboutController.init);
page('/experience', app.experienceController.init);
page('/projects', app.projectsController.init);
page('/contact', app.contactController.init);
page('/', app.homeController.init);

page();
