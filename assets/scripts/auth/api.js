'use strict'

const config = require('../config')
const store = require('../store')
const ui = require('./ui')

const signUp = (data) => {
  console.log('Sign Up API invoked')
  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',
    data: data
  })
}

const signIn = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/sign-in',
    method: 'POST',
    data: data
  })
}

module.exports = {
  signUp,
  signIn
}
