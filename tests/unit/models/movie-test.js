import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('movie', 'Movie', {
  // Specify the other units that are required for this test.
  needs: ['model:actor', 'model:round', 'model:game']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
