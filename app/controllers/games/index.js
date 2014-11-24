import Ember from 'ember';

// https://github.com/stefanpenner/ember-cli-ember-fire/blob/61679f97d379fdbed669917ddc26f36184dd77d4/app/controllers/index.js
export default Ember.ArrayController.extend({
  actions: {
    createGame: function() {
      this.store.createRecord('game', {
        name: 'Test',
      }).save();
    }
  }
});