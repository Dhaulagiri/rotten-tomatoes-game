import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),

  movies: DS.hasMany('movie', { async: true }),
  players: DS.hasMany('player', { async: true })
});
