import DS from 'ember-data';

export default DS.Model.extend({
  number: DS.attr('number'),

  game: DS.belongsTo('game', { async: true }),
  movie: DS.belongsTo('movie', { async: true })
});
