import Ember from 'ember';

export default Ember.ArrayController.extend({

  actions: {
    createGame: function() {
      this.store.createRecord('game', {
        name: 'Test',
      }).save();

      // this.setProperties({
      //   name: null,
      //   score: null
      // });
    }
  }
});
