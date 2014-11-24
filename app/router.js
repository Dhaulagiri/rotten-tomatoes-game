import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('movie', { path: 'movies/:movie_id' }, function() { });
  this.resource('games', function() { });
  //this.resource('game', { path: 'games/:game_id' }, function() { });
});

export default Router;
