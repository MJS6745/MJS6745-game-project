'use strict'

const config = require('../config')
const store = require('../store')

const newGame = () => {
  console.log('createGame in game API invoked')
  // $.ajax({
  //   url: config.apiOrigin + '/games',
  //   method: 'POST',
  //   headers: {
  //     Authorization: 'Token token=' + store.user.token
  //   }
  // })
}

module.exports = {
  newGame
}
