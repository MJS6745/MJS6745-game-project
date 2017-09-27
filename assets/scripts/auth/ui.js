'use strict'

const store = require('../store')

const signUpSuccess = (data) => {
  console.log('signUpSuccess invoked. Data is', data)
  $('#signUpModal').modal('hide')
  $('#signUpSuccessMessageModal').modal('show')
}

const signInSuccess = (data) => {
  console.log('signInSuccess invoked. Data is', data)
  store.user = data.user
  console.log('Store data is currently', store.user)
  $('#signInModal').modal('hide')
  document.getElementById('signInForm').reset()
  $('#signInMessage').text('Sign in successful!')
  $('#signInMessageModal').modal('show')
}

const signInFailure = (error) => {
  console.log('Error is', error)
  $('#signInModal').modal('hide')
  document.getElementById('signInForm').reset()
  $('#signInMessage').text('Oops! Invalid login')
  $('#signInMessageModal').modal('show')
}

module.exports = {
  signUpSuccess,
  signInSuccess,
  signInFailure
}
