'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const events = require('./events.js')
const apiEvents = require('./auth/events')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
$(() => {
  $('#startYes').on('click', events.startNewGame)
  // $('#chooseO').on('click', events.userSelectO)
  // Selector for click event on the individual game icons
  $('#zero').on('click', events.makeSelection)
  $('#one').on('click', events.makeSelection)
  $('#two').on('click', events.makeSelection)
  $('#three').on('click', events.makeSelection)
  $('#four').on('click', events.makeSelection)
  $('#five').on('click', events.makeSelection)
  $('#six').on('click', events.makeSelection)
  $('#seven').on('click', events.makeSelection)
  $('#eight').on('click', events.makeSelection)
  $('#changePasswordButton').hide()
  $('#signOutButton').hide()
  $('#getGamesButton').hide()
  apiEvents.addHandlers()
})
