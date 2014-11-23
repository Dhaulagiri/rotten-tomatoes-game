import DS from 'ember-data';
import config from '../config/environment';

export default DS.RESTAdapter.extend({
  host: 'http://api.rottentomatoes.com/api/public/v1.0',

  ajax: function(url, method, hash) {

    hash = hash || {};
    hash.crossDomain = true;
    hash.xhrFields = { withCredentials: true };
    hash.data = {
      apikey: config.rotten.key
    };
    hash.dataType = 'jsonp';
    hash.callback = '?';

    url = url + "?callback=?"

    return this._super(url, method, hash).then(function(json) {
      return { movie: [json] };
    });
  }
});
