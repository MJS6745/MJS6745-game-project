'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const events = require('./events.js')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
$(() => {
  $('#chooseX').on('click', events.userSelectX)
  $('#chooseO').on('click', events.userSelectO)
  // Selector for click event on the individual game icons
  $('#zero').on('click', events.makeSelection)
})
