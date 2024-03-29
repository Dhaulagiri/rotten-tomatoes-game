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
    this.resource('player', {path: ':player_id'}, function() {
      this.route('games');
      this.route('game', {path: 'games/:game_id'});
    }); 
  });

  this.route('player/game');
});

export default Router;
