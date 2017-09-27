'use strict'

const store = require('../store')

const gameStats = (data) => {
  // store.games = data.games
  // console.log('Store games are', store.games)
  let totalGames = 0
  let totalFinishedGames = 0
  console.log('Raw game stats are', data)
  // for (const prop in data) {
  //   console.log('Prop is', prop)
  // }
  totalGames = data.games.length
  for (let i = 0; i < data.games.length; i++) {
    if (data.games[i].over === true) {
      totalFinishedGames += 1
    }
  }
  console.log('Total games are', totalGames)
  console.log('Total finished games are', totalFinishedGames)
}

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
  gameStats(data)
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
