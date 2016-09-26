'use strict';

const provider = require('./provider');

module.exports = {
  config: provider.config,
  activate: function() {
    console.log('activate aligner-ruby');
  },
  getProvider: function() {
    return provider;
  }
};
