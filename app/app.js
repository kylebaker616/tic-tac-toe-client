// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up1').on('submit', authEvents.onSignUp)
  $('#sign-in1').on('submit', authEvents.onSignIn)
  $('#sign-out1').on('click', authEvents.onSignOut)
  $('.new-game1').hide()
  $('.new-game1').on('click', authEvents.onNewGame)
  $('#sign-out1').hide()
  $('.container').hide()
  $('.game-cell').on('click', authEvents.onCellClick)
})
