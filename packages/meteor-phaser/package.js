Package.describe({
  name: 'meteor-phaser',
  summary: ' The WebGL/Canvas 2D library packaged for Meteor ',
  version: '0.1.0',
  // git: 'https://github.com/Gizmmo/meteor-phaser.git'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0');
  api.addFiles('phaser.js', 'client');
});



Package.onTest(function(api) {
  api.use('tinytest', 'client');
  api.use('meteor-phaser', 'client');
  api.addFiles('meteor-phaser-tests.js', 'client');
});
