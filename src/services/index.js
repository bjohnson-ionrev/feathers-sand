const blinqbank = require('./blinqbank/blinqbank.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(blinqbank);
};
