import Ember from 'ember';

export default Ember.Route.extend({
  controllerName: 'games/new',
  renderTemplate: function() {
    this.render('games/new');
  }
});
