import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('game', 'Game', {
  // Specify the other units that are required for this test.
  needs: ['model:player']
});

test('it exists', function() {
  var model = this.subject();
  // var store = this.store();
  ok(!!model);
});
