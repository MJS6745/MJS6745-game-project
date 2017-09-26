'use strict'

let userOne = ''
let userTwo = ''

const userSelectX = () => {
  console.log('userSelectX invoked')
  userOne = 'X'
  userTwo = 'O'
  console.log('userOne is ', userOne)
  console.log('userTwo is ', userTwo)
  $('#iconSelectModal').modal('hide')
}
const userSelectO = () => {
  console.log('userSelectX invoked')
  userOne = 'O'
  userTwo = 'X'
  console.log('userOne is ', userOne)
  console.log('userTwo is ', userTwo)
  $('#iconSelectModal').modal('hide')
}

module.exports = {
  userSelectX,
  userSelectO
}
