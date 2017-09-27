'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('../store')

const onSignUp = (event) => {
  event.preventDefault()
  console.log('Target is', event.target)
  const data = getFormFields(event.target)
  console.log('Data is ', data)
  console.log('onSignUp invoked')
  if (data.credentials.email !== '' && data.credentials.password !== '') {
    api.signUp(data)
      .then(ui.signUpSuccess)
      .catch(ui.signUpFailure)
  } else {
    ui.signUpFailure()
  }
}

const onSignIn = (event) => {
  event.preventDefault()
  console.log('onSignIn invoked')
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = (event) => {
  event.preventDefault()
  console.log('onChangePassword invoked')
  const data = getFormFields(event.target)
  console.log('Data is', data)
  if (data.passwords.old !== '' && data.passwords.new !== '') {
    api.changePassword(data)
      .then(ui.changePasswordSuccess)
      .catch(ui.changePasswordFailure)
  } else {
    ui.changePasswordFailure()
  }
}

const checkForLogin = (event) => {
  console.log('Current store data is', store.data)
  if (store.user !== undefined) {
    return true
  } else {
    $('#changePasswordMessage').text('Oops! Looks like youre not logged in yet')
    $('#changePasswordMessageModal').modal('show')
    $('#changePasswordModal').modal('hide')
  }
}

const onSignOut = (event) => {
  event.preventDefault()
  console.log('onSignOut invoked. Target is', event.target)
  console.log('Store data is', store.user)
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const addHandlers = () => {
  $('#signUpForm').on('submit', onSignUp)
  $('#signInForm').on('submit', onSignIn)
  $('#changePasswordForm').on('submit', onChangePassword)
  $('#changePasswordButton').on('click', checkForLogin)
  $('#signOutForm').on('submit', onSignOut)
}

module.exports = {
  addHandlers
}
