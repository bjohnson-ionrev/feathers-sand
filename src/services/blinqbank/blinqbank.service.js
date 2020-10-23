// Initializes the `blinqbank` service on path `/blinqbank`
const { Blinqbank } = require('./blinqbank.class');
const createModel = require('../../models/blinqbank.model');
const hooks = require('./blinqbank.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/blinqbank', new Blinqbank(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('blinqbank');

  service.hooks(hooks);
};
