import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('movies', function() {
    this.route('show', {path: ':movie_id'});
  });
  this.resource('games', function() {
    this.route('show', {path: ':game_id'});
  });
  this.resource('players', function() {
    this.route('show', {path: ':player_id'});
  });
  //this.resource('game', { path: 'games/:game_id' }, function() { });
  this.route('movies/show');
  this.route('games/show');
});

export default Router;
