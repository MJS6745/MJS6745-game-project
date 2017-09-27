'use strict'

const store = require('../store')

const signUpSuccess = (data) => {
  console.log('signUpSuccess invoked. Data is', data)
  $('#signUpModal').modal('hide')
  document.getElementById('signUpForm').reset()
  $('#signUpMessage').text('Sign up successful!')
  $('#signUpMessageModal').modal('show')
}

const signUpFailure = (error) => {
  console.log('Error is', error)
  $('#signUpModal').modal('hide')
  document.getElementById('signUpForm').reset()
  $('#signUpMessage').text('Oops! There was an error')
  $('#signUpMessageModal').modal('show')
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

const changePasswordSuccess = (data) => {
  console.log('changePasswordSuccess invoked. Data is ', data)
}

const changePasswordFailure = (error) => {
  console.log('changePasswordFailure invoked. Error is', error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure
}
