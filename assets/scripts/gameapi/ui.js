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
const updateGameSuccess = (data) => {
  console.log('Update game success invoked. Data returned is', data)
}
module.exports = {
  createGameSuccess,
  createGameFailure,
  updateGameSuccess
}
