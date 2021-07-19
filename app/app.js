// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#new-game').hide()
  $('#new-game').on('click', authEvents.onNewGame)
  $('#sign-out').hide()
  $('.container').hide()
  $('.game-cell').on('click', authEvents.onCellClick)
})
const initialBoard = $('.status')
let gamePlay = true
let player = 'X'
let cells = ['', '', '', '', '', '', '', '', '', ]


// $('.game-cell').each() {

// }
