import Ember from 'ember';
import ajax from 'ic-ajax';

export default Ember.Route.extend({
  model: function() {
    return ajax({
      url: 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/box_office.json?limit=5&country=us&apikey=8hu4t4gbdahjkhaf6txg6276',
      type: 'get',
      dataType: 'jsonp'
    }).then(function(movies){
      return movies;
    });
  }
});
