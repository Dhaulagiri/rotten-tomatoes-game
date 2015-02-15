import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('round', 'Round', {
  // Specify the other units that are required for this test.
  needs: ['model:game', 'model:movie', 'model:player', 'model:actor']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
