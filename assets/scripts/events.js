'use strict'

let userOne = ''
let userTwo = ''

const userSelectX = () => {
  console.log('userSelectX invoked')
  userOne = 'X'
  userTwo = 'O'
  console.log('userOne is ', userOne)
  console.log('userTwo is ', userTwo)
  // Add a method here to clear game board
  $('#iconSelectModal').modal('hide')
}
const userSelectO = () => {
  console.log('userSelectX invoked')
  userOne = 'O'
  userTwo = 'X'
  console.log('userOne is ', userOne)
  console.log('userTwo is ', userTwo)
  // Add a method here to clear game board
  $('#iconSelectModal').modal('hide')
}
const makeSelection = (event) => {
  console.log('makeSelection invoked')
  console.log('Target is', event.target)
  $(event.target).text('TEST')
}

module.exports = {
  userSelectX,
  userSelectO,
  makeSelection
}
