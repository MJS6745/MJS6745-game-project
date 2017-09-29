'use strict'

const gameApi = require('./api')
const gameUi = require('./ui')
const store = require('../store')

const createGame = () => {
  // console.log('Create game in game events invoked')
  gameApi.newGame()
    .then(gameUi.createGameSuccess)
    .catch(gameUi.createGameFailure)
}

const updateGame = (data) => {
  // console.log('Update game in game events invoked')
  // console.log('Data being received is', data)
  // console.log('Game data is currently', dataCheck)
  gameApi.apiUpdateGame(data)
    .then(gameUi.updateGameSuccess)
    .catch(gameUi.updateGameSuccess)
}
const getGames = (event) => {
  event.preventDefault()
  // console.log('Get games in gameapi invoked')
  if (store.user !== undefined && store.user !== null) {
    gameApi.apiGetGames()
      .then(gameUi.getGameSuccess)
      .catch(gameUi.getGameFailure)
  } else {
    $('#getGamesMessage').text('Oops! You need to log in first')
    $('#totalGames').text('')
    $('#totalFinishedGames').text('')
    $('#getGamesMessageModal').modal('show')
    $('#getGamesModal').modal('hide')
    return false
  }
}

module.exports = {
  createGame,
  updateGame,
  getGames
}
