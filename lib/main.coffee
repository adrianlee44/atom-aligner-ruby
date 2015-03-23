provider = require './provider'

module.exports =
  config: provider.config

  activate: ->
    console.log 'activate aligner-ruby'

  getProvider: -> provider
