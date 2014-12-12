import Ember from 'ember';

export default Ember.ObjectController.extend({
  init: function() {
     this.set('player', Ember.Object.create());
  },
  actions: {
    createPlayer: function() {
      var that = this;
      var player = this.store.createRecord('player', {
        name: this.get('player.name'),
      });

      player.save().then(function(player) {
        that.transitionToRoute('player.index', player);
      });
      
      // debugger;
      //
      // player.get('games').then(function() {
      //   debugger
      //   player.get('games').addObject(that.store.createRecord('game', {
      //     name: new Date().getTime()
      //   }));
      //
      //
      // });


      // player.save().then(function(player) {
      //
      //   var game = that.store.createRecord('game', {
      //     name: new Date().getTime()//that.get('player.name')
      //   });
      //
      //   game.get('players').then(function(players) {
      //     players.pushObject(player);
      //
      //     game.save().then(function(game) {
      //       debugger
      //
      //       that.transitionToRoute('player.game', player, game);
      //     });
      //   })
      // }).catch();
    }
  }
});
