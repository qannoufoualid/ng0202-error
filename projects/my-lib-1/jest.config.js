const config = require('../../jest.config.js');
config.testMatch = ['**/my-lib-1/**/+(*.)+(spec).+(ts)'];
module.exports = { ...config };
