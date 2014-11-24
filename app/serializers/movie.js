import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs : {
    actors: { embedded: 'always' }
	},

	extractSingle: function (store, type, payload) {
		var movie = payload.movie[0];

    movie.critics_score = movie.ratings.critics_score;
    movie.audience_score = movie.ratings.audience_score;
    movie.thumbnail = movie.posters.thumbnail;

		payload = { movie: movie };
		return this._super(store, type, payload);
  }//,

  // typeForRoot: function(root) {
  //   // 'response-fast-car' should become 'fast-car'
  //   var subRoot = root.substring(9);
  //
  //   // _super normalizes 'fast-car' to 'fastCar'
  //   return this._super(subRoot);
  // }

});
