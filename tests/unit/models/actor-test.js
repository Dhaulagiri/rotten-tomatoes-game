import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('actor', 'Actor', {
  // Specify the other units that are required for this test.
  needs: ['model:movie']
});

test('it exists', function() {
  var model = this.subject();
  // var store = this.store();
  ok(!!model);
});
