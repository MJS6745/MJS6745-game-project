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
const updateGameFailure = (error) => {
  console.log('Update game failed. Error is ', error)
}
const getGameSuccess = (data) => {
  console.log('Get game success invoked, data is', data)
}
const getGameFailure = (error) => {
  console.log('Get game error invoked, error is', error)
}
module.exports = {
  createGameSuccess,
  createGameFailure,
  updateGameSuccess,
  updateGameFailure,
  getGameSuccess,
  getGameFailure
}
