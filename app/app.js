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
// const initialBoard = $('.status')
// let gamePlay = true
// let player = 'X'
// const gameStatus = function () {
//     const zero = cells[0].classList[1]
//     const one = cells[1].classList[1]
//     const two = cells[2].classList[1]
//     const three = cells[3].classList[1]
//     const four = cells[4].classList[1]
//     const five = cells[5].classList[1]
//     const six = cells[6].classList[1]
//     const seven = cells[7].classList[1]
//     const eight = cells[8].classList[1]
//   console.log (zero, one, two)
//   }
