import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    startGame: function(game) {
      debugger
      var that = this;
      var store = this.get('store');

      game = store.createRecord('game', {
        name: 'Test'
      }).save().then(function(game) {
        that.transitionToRoute('games.show', game);
      });


      // this.get('movies').then(function(movies) {
      //   movies.addObject(1);
      //   game.save();
      // });


      // validate and exit if needed

      // this.get('movies').then(function(movies) {
      //   // movies.content.length
      //   for (var index = 0; index < 2; ++index) {
      //     var movie = movies.content[index];
      //     var round = store.createRecord('round', {
      //       movie: movie,
      //       number: index + 1,
      //       game: game
      //     });
      //
      //     round.save().then(function() {
      //       game.get('rounds').then(function(rounds){
      //         rounds.addObject(round);
      //         game.save().then(function() {
      //           round.save();
      //         });
      //       });
      //     });
      //   }
      // });
    }

  }
});
