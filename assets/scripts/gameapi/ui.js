'use strict'

const store = require('../store')

const createGameSuccess = (data) => {
  console.log('createGameSuccess invoked. Data returned is', data)
  store.game = data.game
  console.log('Game data in store is', store.game)
}
const createGameFailure = (error) => {
  console.log('createGameFailure invoked. Error is', error)
}

module.exports = {
  createGameSuccess,
  createGameFailure
}
