import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('game', 'Game', {
  // Specify the other units that are required for this test.
  needs: ['model:player', 'model:movie', 'model:actor', 'model:round']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
