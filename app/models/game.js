import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),

  players: DS.attr('player')
});
