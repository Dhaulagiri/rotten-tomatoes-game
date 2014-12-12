import Ember from 'ember';

export default Ember.ObjectController.extend({
  init: function() {
     this.set('player', Ember.Object.create());
  },
  actions: {
    createPlayer: function() {
      this.store.createRecord('player', {
        name: this.get('player.name'),
      }).save();
    }
  }
});
