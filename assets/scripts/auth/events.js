'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onSignUp = (event) => {
  event.preventDefault()
  console.log('Target is', event.target)
  const data = getFormFields(event.target)
  console.log('Data is ', data)
  console.log('onSignUp invoked')
  api.signUp(data)
    .then(ui.signUpSuccess)
}

const addHandlers = () => {
  $('#signUpForm').on('submit', onSignUp)
}

module.exports = {
  addHandlers
}
