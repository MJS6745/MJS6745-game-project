'use strict'

let userOne = ''
let userTwo = ''
let playerTurn = 0
const gameArray = ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a']

const clearBoard = (array) => {
  for (let i = 0; i < array.length; i++) {
    array[i] = 'a'
  }
}
const userSelectX = () => {
  console.log('userSelectX invoked')
  userOne = 'x'
  userTwo = 'o'
  playerTurn = 1
  console.log('userOne is ', userOne)
  console.log('userTwo is ', userTwo)
  // Add a method here to clear game board
  clearBoard(gameArray)
  $('.gameboard').children('div').text('')
  $('#iconSelectModal').modal('hide')
}
const userSelectO = () => {
  console.log('userSelectO invoked')
  userOne = 'o'
  userTwo = 'x'
  playerTurn = 1
  console.log('userOne is ', userOne)
  console.log('userTwo is ', userTwo)
  // Add a method here to clear game board
  clearBoard(gameArray)
  $('.gameboard').children('div').text('')
  $('#iconSelectModal').modal('hide')
}
const makeSelection = (event) => {
  console.log('makeSelection invoked')
  console.log('Target is', event.target.getAttribute('id'))
  const gameCell = event.target.getAttribute('id')
  if (playerTurn === 1) {
    $(event.target).text(userOne)
  } else {
    $(event.target).text(userTwo)
  }
  if (playerTurn === 1) {
    if (gameCell === 'zero') {
      gameArray[0] = userOne
    } else if (gameCell === 'one') {
      gameArray[1] = userOne
    } else if (gameCell === 'two') {
      gameArray[2] = userOne
    } else if (gameCell === 'three') {
      gameArray[3] = userOne
    } else if (gameCell === 'four') {
      gameArray[4] = userOne
    } else if (gameCell === 'five') {
      gameArray[5] = userOne
    } else if (gameCell === 'six') {
      gameArray[6] = userOne
    } else if (gameCell === 'seven') {
      gameArray[7] = userOne
    } else if (gameCell === 'eight') {
      gameArray[8] = userOne
    }
    playerTurn = 2
  } else {
    if (gameCell === 'zero') {
      gameArray[0] = userTwo
    } else if (gameCell === 'one') {
      gameArray[1] = userTwo
    } else if (gameCell === 'two') {
      gameArray[2] = userTwo
    } else if (gameCell === 'three') {
      gameArray[3] = userTwo
    } else if (gameCell === 'four') {
      gameArray[4] = userTwo
    } else if (gameCell === 'five') {
      gameArray[5] = userTwo
    } else if (gameCell === 'six') {
      gameArray[6] = userTwo
    } else if (gameCell === 'seven') {
      gameArray[7] = userTwo
    } else if (gameCell === 'eight') {
      gameArray[8] = userTwo
    }
    playerTurn = 1
  }
  console.log('gameArray is ', gameArray)
}

module.exports = {
  userSelectX,
  userSelectO,
  makeSelection
}
