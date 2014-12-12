import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  synopsis: DS.attr('string'),
  critics_rating: DS.attr('string'),
  critics_score: DS.attr('number'),
  audience_rating: DS.attr('string'),
  audience_score: DS.attr('number'),
  thumbnail: DS.attr('string'),
  year: DS.attr('string'),

  actors: DS.hasMany('actor'),
  round: DS.belongsTo('round')
});
