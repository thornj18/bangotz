var cssFilesToInject = [
'/bower_components/angular-material/angular-material.css',
'/bower_components/angular-material-data-table/dist/md-data-table.min.css',
'styles/**/*.css'
];
var jsFilesToInject = [
  'js/dependencies/sails.io.js',
  '/bower_components/jquery/dist/jquery.js',
  '/bower_components/angular/angular.js',
  '/bower_components/angular-ui-router/release/angular-ui-router.js',
  '/bower_components/angular-ui-router/release/angular-ui-router.js',
  'bower_components/momentjs/min/moment.min.js',
  'bower_components/momentjs/min/locales.min.js',
  'bower_components/humanize-duration/humanize-duration.js',
  '/bower_components/angular-timer/dist/angular-timer.js',
  '/bower_components/angular-aria/angular-aria.js',
  '/bower_components/angular-animate/angular-animate.js',
  '/bower_components/angular-material/angular-material.js',
  '/bower_components/bootstrap/dist/js/boostrap.js',
  '/bower_components/angular-material-data-table/dist/md-data-table.min.js',
  '/bower_components/angular-material-icons/angular-material-icons.js',
  'js/dependencies/**/*.js',

  'js/**/*.js'
  ];

var templateFilesToInject = [
'templates/*.html'
];

module.exports.cssFilesToInject = cssFilesToInject.map(function(path) {
  return '.tmp/public/' + path;
});
module.exports.jsFilesToInject = jsFilesToInject.map(function(path) {
  return '.tmp/public/' + path;
});
module.exports.templateFilesToInject = templateFilesToInject.map(function(path) {
  return 'assets/' + path;
});