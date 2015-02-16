import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    submit: function(game) {
      debugger
      // iterate through guesses
      var rounds = game.get('rounds');
      rounds.forEach(function(round) {
        // validate input to be < 100
        // save gueses to round
        console.log('saving ' + round);
        round.save();
      })


      // calculate difference from each and calclulate for entire round
      console.log(game);
    }
  }
});
