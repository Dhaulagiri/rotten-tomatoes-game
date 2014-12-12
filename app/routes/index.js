import Ember from 'ember';

export default Ember.Route.extend({
  controllerName: 'players/new',
  renderTemplate: function() {
    this.render('players/new');
  }
});
