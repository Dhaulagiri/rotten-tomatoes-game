import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    startGame: function(game) {

      // validate and exit if needed
      var store = this.get('store');
      this.get('movies').then(function(movies) {
        // movies.content.length
        for (var index = 0; index < 2; ++index) {
          var movie = movies.content[index];
          var round = store.createRecord('round', {
            movie: movie,
            number: index + 1,
            game: game
          });

          round.save().then(function() {
            game.get('rounds').then(function(rounds){
              rounds.addObject(round);
              game.save().then(function() {
                round.save();
              });
            });
          });
        }
      });
    }
  }
});
