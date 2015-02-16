import DS from 'ember-data';

export default DS.Model.extend({
  roundNumber: DS.attr('number'),
  guess: DS.attr('number'),

  game: DS.belongsTo('game', { async: true }),
  movie: DS.belongsTo('movie', { async: true }),

  roundScore: Ember.computed('guess', function() {
    debugger;
    var a = parseInt(this.get('guess'));
    if (isNaN(a) || a === 0) {
      return 0;
    }
    var score_diff = this.get('movie').get('critics_score') - this.get('guess');
    return Math.abs(score_diff);
  })
});
