/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'rotten-tomatoes-game',
    environment: environment,
    baseURL: '/',
    firebase_instance: 'rotten-tomatoes-game',
    rotten_tomatoes_key: '8hu4t4gbdahjkhaf6txg6276',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    contentSecurityPolicy: {
      'connect-src': "'self' https://auth.firebase.com wss://*.firebaseio.com",
      'frame-src': "https://*.firebaseio.com",
      //'script-src': "'self' http://*.rottentomatoes.com",
      'font-src': "'self' http://*.gstatic.com",
      'style-src': "'self' http://*.googleapis.com",
      //'content_security_policy': "script-src 'self' 'unsafe-eval'; object-src 'self'"
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'auto';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
