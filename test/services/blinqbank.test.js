const assert = require('assert');
const app = require('../../src/app');

describe('\'blinqbank\' service', () => {
  it('registered the service', () => {
    const service = app.service('blinqbank');

    assert.ok(service, 'Registered the service');
  });
});
