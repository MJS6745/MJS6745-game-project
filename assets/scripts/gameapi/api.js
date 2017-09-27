'use strict'

const config = require('../config')
const store = require('../store')

const newGame = () => {
  console.log('createGame in game API invoked')
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const apiUpdateGame = (data) => {
  console.log('API update game invoked')
  console.log('Data being passed is', data)
  return $.ajax({
    url: config.apiOrigin + '/games/' + store.game.id,
    method: 'PATCH',
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const apiGetGames = () => {
  console.log('apiGetGames invoked')
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  newGame,
  apiUpdateGame,
  apiGetGames
}
