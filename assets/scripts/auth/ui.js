'use strict'

const store = require('../store')

const signUpSuccess = (data) => {
  console.log('signUpSuccess invoked. Data is', data)
}

const signInSuccess = (data) => {
  console.log('signInSuccess invoked. Data is', data)
  store.user = data.user
  console.log('Store data is currently', store.user)
}

module.exports = {
  signUpSuccess,
  signInSuccess
}
