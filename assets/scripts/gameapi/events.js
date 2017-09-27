'use strict'

const gameApi = require('./api')

const createGame = () => {
  console.log('Create game in game events invoked')
  gameApi.newGame()
}

module.exports = {
  createGame
}
