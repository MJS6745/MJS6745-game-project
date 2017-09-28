'use strict'

const store = require('../store')

const totalWins = (data) => {
  let totalWins = 0
  for (let i = 0; i < data.games.length; i++) {
    if (data.games[i].over === true) {
      if ((data.games[i].cells[0] === 'x' && data.games[i].cells[4] === 'x' && data.games[i].cells[8] === 'x') || (data.games[i].cells[0] === 'x' && data.games[i].cells[1] === 'x' && data.games[i].cells[2] === 'x') || (data.games[i].cells[1] === 'x' && data.games[i].cells[4] === 'x' && data.games[i].cells[7] === 'x') || (data.games[i].cells[2] === 'x' && data.games[i].cells[4] === 'x' && data.games[i].cells[6] === 'x') || (data.games[i].cells[3] === 'x' && data.games[i].cells[4] === 'x' && data.games[i].cells[5] === 'x') || (data.games[i].cells[6] === 'x' && data.games[i].cells[7] === 'x' && data.games[i].cells[8] === 'x') || (data.games[i].cells[0] === 'x' && data.games[i].cells[3] === 'x' && data.games[i].cells[6] === 'x') || (data.games[i].cells[2] === 'x' && data.games[i].cells[5] === 'x' && data.games[i].cells[8] === 'x')) {
        totalWins += 1
      }
    }
  }
  return totalWins
}

const totalLosses = (data) => {
  let totalLosses = 0
  for (let i = 0; i < data.games.length; i++) {
    if (data.games[i].over === true) {
      if ((data.games[i].cells[0] === 'o' && data.games[i].cells[4] === 'o' && data.games[i].cells[8] === 'o') || (data.games[i].cells[0] === 'o' && data.games[i].cells[1] === 'o' && data.games[i].cells[2] === 'o') || (data.games[i].cells[1] === 'o' && data.games[i].cells[4] === 'o' && data.games[i].cells[7] === 'o') || (data.games[i].cells[2] === 'o' && data.games[i].cells[4] === 'o' && data.games[i].cells[6] === 'o') || (data.games[i].cells[3] === 'o' && data.games[i].cells[4] === 'o' && data.games[i].cells[5] === 'o') || (data.games[i].cells[6] === 'o' && data.games[i].cells[7] === 'o' && data.games[i].cells[8] === 'o') || (data.games[i].cells[0] === 'o' && data.games[i].cells[3] === 'o' && data.games[i].cells[6] === 'o') || (data.games[i].cells[2] === 'o' && data.games[i].cells[5] === 'o' && data.games[i].cells[8] === 'o')) {
        totalLosses += 1
      }
    }
  }
  return totalLosses
}

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
  const playerLosses = totalLosses(data)
  const playerWins = totalWins(data)
  console.log('Total games are', totalGames)
  console.log('Total finished games are', totalFinishedGames)
  $('#getGamesMessage').text('Here are your game stats')
  $('#getGamesModal').modal('hide')
  $('#totalGames').text('Total games started: ' + totalGames)
  $('#totalFinishedGames').text('Total games finished: ' + totalFinishedGames)
  $('#totalWins').text('Wins: ' + playerWins)
  $('#totalLosses').text('Losses: ' + playerLosses)
  $('#totalTies').text('Ties: ' + (totalFinishedGames - (playerWins + playerLosses)))
  $('#getGamesMessageModal').modal('show')
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
