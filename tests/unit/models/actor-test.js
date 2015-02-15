import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('actor', 'Actor', {
  // Specify the other units that are required for this test.
  needs: ['model:movie', 'model:round']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
