import Ember from 'ember';

export default Ember.ObjectController.extend({
  selectedPreset: null,
  presets: function(){
    return this.store.find('preset');
  }.property(),
  actions: {
    startGame: function(game) {
      var that = this;
      var store = this.get('store');
      var _movies = that.get("selectedPreset")._data.movies;
      // Create the game
      game = store.createRecord('game', {
        name: Date.now()
      }).save().then(function(game) {
        // Get its movie array
        game.get('movies').then(function(movies) {
          // Grab all the movies from the selected item
          // TODO - This does not seem correct
          debugger
          // Add each movie to the game's movie array
          _movies.forEach(function(m) {
              movies.addObject(m);
          });

          // create a round per movie
          game.get('rounds').then(function(rounds) {
            var counter = 1;
            debugger;
            _movies.forEach(function(m) {

              var round = store.createRecord('round', {
                roundNumber: counter,
                guess: 0
              });
              round.set('game', game);
              round.set('movie', m);
              round.save();
              rounds.addObject(round);

              counter += 1;
            });

            // Save the game and transition to the game
            game.save().then(function() {
              that.transitionToRoute('games.show', game);
              // var firstRound = game.get('rounds').get('firstObject');
              // that.transitionTo('games.show.round', game, firstRound);
            });
          });



        });

      });
    }
  }
});
