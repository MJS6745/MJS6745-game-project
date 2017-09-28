'use strict'

const gameApi = require('./gameapi/api')
const gameEvents = require('./gameapi/events')
const store = require('./store')
const currentGameData = {
  'game': {
    'cell': {
      'index': 0,
      'value': ''
    },
    'over': false
  }
}

let userOne = ''
let userTwo = ''
let playerTurn = 0
const gameArray = ['', '', '', '', '', '', '', '', '']
let gameStartFlag = false
let drawFlag = false

const clearBoard = (array) => {
  for (let i = 0; i < array.length; i++) {
    array[i] = ''
  }
  $('.gameboard').children('div').text('')
  // New code to remove classes
  $('.gameboard').children('div').removeClass('selectx')
  $('.gameboard').children('div').removeClass('selecto')
  // End new code to remove classes
}
const startNewGame = () => {
  currentGameData.game.over = false
  gameStartFlag = true
  drawFlag = false
  console.log('startNewGame invoked')
  userOne = 'x'
  userTwo = 'o'
  playerTurn = 1
  console.log('userOne is ', userOne)
  console.log('userTwo is ', userTwo)
  // Add a method here to clear game board
  clearBoard(gameArray)
  // Next line is where the API for create game should go
  if (store.user !== undefined && store.user !== null) {
    gameEvents.createGame()
  }
  // $('.gameboard').children('div').text('')
  $('#iconSelectModal').modal('hide')
}
const userSelectO = () => {
  gameStartFlag = true
  console.log('userSelectO invoked')
  userOne = 'o'
  userTwo = 'x'
  playerTurn = 1
  console.log('userOne is ', userOne)
  console.log('userTwo is ', userTwo)
  // Add a method here to clear game board
  clearBoard(gameArray)
  // $('.gameboard').children('div').text('')
  $('#iconSelectModal').modal('hide')
}
const checkForWin = (array) => {
  let playerSymbol = ''
  let winFlag = false
  // Since the make selection changes the player before calling this,
  // the player symbol is the opposite of the current player turn
  if (playerTurn === 2) {
    playerSymbol = userOne
  } else if (playerTurn === 1) {
    playerSymbol = userTwo
  }
  console.log('Checking this value for win', playerSymbol)
  if (gameArray[0] === playerSymbol && gameArray[4] === playerSymbol && gameArray[8] === playerSymbol) {
    console.log('Winner! Case A. Winner is', playerSymbol)
    winFlag = true
    return winFlag
  } else if (gameArray[0] === playerSymbol && gameArray[1] === playerSymbol && gameArray[2] === playerSymbol) {
    console.log('Winner! Case B. Winner is', playerSymbol)
    winFlag = true
    return winFlag
  } else if (gameArray[1] === playerSymbol && gameArray[4] === playerSymbol && gameArray[7] === playerSymbol) {
    console.log('Winner! Case C. Winner is', playerSymbol)
    winFlag = true
    return winFlag
  } else if (gameArray[2] === playerSymbol && gameArray[4] === playerSymbol && gameArray[6] === playerSymbol) {
    console.log('Winner! Case D. Winner is', playerSymbol)
    winFlag = true
    return winFlag
  } else if (gameArray[3] === playerSymbol && gameArray[4] === playerSymbol && gameArray[5] === playerSymbol) {
    console.log('Winner! Case E. Winner is', playerSymbol)
    winFlag = true
    return winFlag
  } else if (gameArray[6] === playerSymbol && gameArray[7] === playerSymbol && gameArray[8] === playerSymbol) {
    console.log('Winner! Case F. Winner is', playerSymbol)
    winFlag = true
    return winFlag
  } else if (gameArray[0] === playerSymbol && gameArray[3] === playerSymbol && gameArray[6] === playerSymbol) {
    console.log('Winner! Case G. Winner is', playerSymbol)
    winFlag = true
    return winFlag
  } else if (gameArray[2] === playerSymbol && gameArray[5] === playerSymbol && gameArray[8] === playerSymbol) {
    console.log('Winner! Case H. Winner is', playerSymbol)
    winFlag = true
    return winFlag
  }
  if (!gameArray.some(item => item === '')) {
    $('#drawMessageModal').modal('show')
    drawFlag = true
    currentGameData.game.over = true
    console.log('Current game over status is', currentGameData.game.over)
    if (store.user !== undefined && store.user !== null) {
      gameEvents.updateGame(currentGameData)
    }
    clearBoard(gameArray)
    gameStartFlag = false
  }
}

// This function will check to see if there is already input on the game square
// and return true or false
const checkForInput = (id) => {
  let gameSquare = 0
  if (id === 'zero') {
    gameSquare = 0
  } else if (id === 'one') {
    gameSquare = 1
  } else if (id === 'two') {
    gameSquare = 2
  } else if (id === 'three') {
    gameSquare = 3
  } else if (id === 'four') {
    gameSquare = 4
  } else if (id === 'five') {
    gameSquare = 5
  } else if (id === 'six') {
    gameSquare = 6
  } else if (id === 'seven') {
    gameSquare = 7
  } else if (id === 'eight') {
    gameSquare = 8
  }
  if (gameArray[gameSquare] === '') {
    return true
  } else {
    return false
  }
}

const makeSelection = (event) => {
  // console.log('makeSelection invoked')
  // console.log('Target is', event.target.getAttribute('id'))
  // Add a check here to see if any item in game array is 'a'
  // checkForInput(event.target.getAttribute('id'))
  if (gameArray.some(item => item === '') && checkForInput(event.target.getAttribute('id')) && gameStartFlag) {
    const gameCell = event.target.getAttribute('id')
    let currentIndex = 0
    let currentValue = ''
    if (playerTurn === 1) {
      $(event.target).text(userOne)
      currentValue = userOne
      //  Start new code for styling cell
      if (currentValue === 'x') {
        $(event.target).addClass('selectx')
      } else if (currentValue === 'o') {
        $(event.target).addClass('selecto')
      }
      // End new code for styling cell
    } else {
      $(event.target).text(userTwo)
      currentValue = userTwo
      //  Start new code for styling cell
      if (currentValue === 'x') {
        $(event.target).addClass('selectx')
      } else if (currentValue === 'o') {
        $(event.target).addClass('selecto')
      }
      // End new code for styling cell
    }
    if (playerTurn === 1) {
      if (gameCell === 'zero') {
        gameArray[0] = userOne
        currentIndex = 0
      } else if (gameCell === 'one') {
        gameArray[1] = userOne
        currentIndex = 1
      } else if (gameCell === 'two') {
        gameArray[2] = userOne
        currentIndex = 2
      } else if (gameCell === 'three') {
        gameArray[3] = userOne
        currentIndex = 3
      } else if (gameCell === 'four') {
        gameArray[4] = userOne
        currentIndex = 4
      } else if (gameCell === 'five') {
        gameArray[5] = userOne
        currentIndex = 5
      } else if (gameCell === 'six') {
        gameArray[6] = userOne
        currentIndex = 6
      } else if (gameCell === 'seven') {
        gameArray[7] = userOne
        currentIndex = 7
      } else if (gameCell === 'eight') {
        gameArray[8] = userOne
        currentIndex = 8
      }
      playerTurn = 2
    } else {
      if (gameCell === 'zero') {
        gameArray[0] = userTwo
        currentIndex = 0
      } else if (gameCell === 'one') {
        gameArray[1] = userTwo
        currentIndex = 1
      } else if (gameCell === 'two') {
        gameArray[2] = userTwo
        currentIndex = 2
      } else if (gameCell === 'three') {
        gameArray[3] = userTwo
        currentIndex = 3
      } else if (gameCell === 'four') {
        gameArray[4] = userTwo
        currentIndex = 4
      } else if (gameCell === 'five') {
        gameArray[5] = userTwo
        currentIndex = 5
      } else if (gameCell === 'six') {
        gameArray[6] = userTwo
        currentIndex = 6
      } else if (gameCell === 'seven') {
        gameArray[7] = userTwo
        currentIndex = 7
      } else if (gameCell === 'eight') {
        gameArray[8] = userTwo
        currentIndex = 8
      }
      playerTurn = 1
    }
    console.log('gameArray is ', gameArray)
    // Call method here to update the game board
    // const currentGameData = {
    //   'game': {
    //     'cell': {
    //       'index': currentIndex,
    //       'value': currentValue
    //     },
    //     'over': false
    //   }
    // }
    currentGameData.game.cell.index = currentIndex
    currentGameData.game.cell.value = currentValue
    if (store.user !== undefined && store.user !== null) {
      gameEvents.updateGame(currentGameData)
    }
    // Call a method here to check for a win
    if (checkForWin(gameArray)) {
      let playerSymbol = ''
      let playerName = ''
      if (playerTurn === 2) {
        playerSymbol = userOne
        playerName = 'Player One'
      } else if (playerTurn === 1) {
        playerSymbol = userTwo
        playerName = 'Player Two'
      }
      console.log('Game over')
      $('#winMessage').text('The winner is ' + playerSymbol.toUpperCase() + '!! Congrats to ' + playerName)
      $('#winMessageModal').modal('show')
      // Will likely need to add in the AJAX calls here to export data
      clearBoard(gameArray)
      gameStartFlag = false
      currentGameData.game.over = true
      if (store.user !== undefined && store.user !== null) {
        gameEvents.updateGame(currentGameData)
      }
    }
  } else if (gameArray.some(item => item === '') && !checkForInput(event.target.getAttribute('id')) && gameStartFlag) {
    return false
  } else {
    $('#newgameMessageModal').modal('show')
  }
}

module.exports = {
  startNewGame,
  userSelectO,
  makeSelection,
  gameArray
}
