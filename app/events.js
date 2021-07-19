'use strict'
const getFormFields = require('../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()
  // get info from event and form
  const form = event.target
  const data = getFormFields(form)
  // make an API call using AJAX
  api.signUp(data)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
  // Handle a successful or failed call
}

const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.signIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

const onSignOut = function () {
  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}

const onNewGame = function (event) {
  event.preventDefault()
  $('.container').show()
  api.newGame()
}

const onCellClick = function (event) {
  console.log('clicked')
  // console.log(event.target.id)
  const box = event.target.id
  console.log(box)
  const cellStatus = event.target.classList
  if (cellStatus[1]=== 'x' || cellStatus[1]=== 'o') {
    return null
  }
  if (xTurn === true) {
    cellStatus.add('x')
    xTurn = !xTurn
  } else {
    cellStatus.add('o')
    xTurn = !xTurn
  }
  $(event.target).text(cellStatus[1])
  // const status = $('.status')
  // const cells = $('.game-cell')
  // const reset = $('.reset')
  // console.log(cells)
  // let gamePlay = true
  // let xTurn= true



}
let xTurn= true
module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onNewGame,
  onCellClick
}
