import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('player', 'Player', {
  // Specify the other units that are required for this test.
  needs: ['model:game', 'model:movie', 'model:actor']
});

test('it exists', function() {
  var model = this.subject();
  // var store = this.store();
  ok(!!model);
});
