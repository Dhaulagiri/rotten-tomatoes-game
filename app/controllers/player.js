import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    deletePlayer: function(player) {
      var that = this;
      this.store.find('player', player.id).then(function (player) {
        player.deleteRecord();
        player.save().then(function() {
          that.transitionToRoute('players.index');
        });
      });
    }
  }
});
