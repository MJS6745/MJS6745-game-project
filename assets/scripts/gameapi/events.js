'use strict'

const gameApi = require('./api')
const gameUi = require('./ui')

const createGame = () => {
  console.log('Create game in game events invoked')
  gameApi.newGame()
    .then(gameUi.createGameSuccess)
    .catch(gameUi.createGameFailure)
}

module.exports = {
  createGame
}
