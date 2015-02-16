import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  name: DS.attr('string'),

  movies: DS.hasMany('movie', { async: true }),
  players: DS.hasMany('player', { async: true }),
  rounds: DS.hasMany('round', { async: true }),

  roundScores: Ember.computed.mapBy('rounds', 'roundScore'),
  score: Ember.computed.sum('roundScores')//,
  // isGameOver: function() {
  //   var gameStatus = true;
  //   var rounds = this.get("rounds");
  //   debugger
  //   rounds.forEach(function(round) {
  //     var guess = round.get("guess");
  //     if (guess === 0 || guess === undefined) {
  //       gameStatus = false;
  //     }
  //   });
  //   return gameStatus;
  //   }.property("rounds.@each.roundScore")
});
