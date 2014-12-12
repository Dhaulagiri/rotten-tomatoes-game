import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    deletePlayer: function(player) {
      debugger
      this.store.find('player', player).then(function (player) {
        player.deleteRecord();
        this.transitionToRoute('players.index');
      })
    }
  }
});
