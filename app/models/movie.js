import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  synopsis: DS.attr('string'),
  critics_score: DS.attr('number'),
  audience_score: DS.attr('number'),
  thumbnail: DS.attr('string'),
  year: DS.attr('string'),

  actors: DS.hasMany('actor')
});