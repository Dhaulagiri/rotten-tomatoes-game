import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('movie', 'Movie', {
  // Specify the other units that are required for this test.
  needs: ['model:actor']
});

test('it exists', function() {
  var model = this.subject();
  // var store = this.store();
  ok(!!model);
});
