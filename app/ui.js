'use strict'
const store = require('./store')
const onSignUpSuccess = function (response) {
  console.log('in then')
  $('#message').text(`Thank you for signing up ${response.user.email}`)
  $('#sign-up1').trigger('reset')
}

const onSignUpFailure = function (response) {
  console.log('in catch')
  $('#message').text('Sign up failed')
  $('#sign-up1').trigger('reset')
}
const onSignInSuccess = function (response) {
  console.log('in then')
  $('#message').text(`Now signed in as ${response.user.email}`)
  store.token = response.user.token
  $('#sign-in1').trigger('reset')
  $('#sign-in1').hide()
  $('#sign-up1').hide()
  $('#sign-out1').show()
  $('.new-game1').show()
  $('#sign-in-title').hide()
  $('#sign-up-title').hide()
  // $('#change-password').show()
}

const onSignInFailure = function (response) {
  console.log('in catch')
  $('#message').text('Sign in failed, please enter a valid Email and password.')
  $('#sign-in1').trigger('reset')
}

const onSignOutSuccess = function (response) {
  console.log('in then')
  $('#message').text('Signed Out')
  $('#sign-in1').show()
  $('#sign-up1').show()
  $('#sign-out1').hide()
  $('.container').hide()
  $('.new-game1').hide()
  $('#button1').show()
  $('#message').delay(3000).hide(500)
  // $('.status').delay(5000).fadeOut(500)
}

const onSignOutFailure = function (response) {
  console.log('in catch')
  $('#message').text('Sign Out Failed')
}

const onNewGameSuccess = function (response) {
  store.id = response.game._id
  $('#sign-up1').hide()
  // $('.form-modal').hide()
  $('#button1').hide('slow')
  $('.form-modal').trigger('exit')
  $('#sign-out1').show()
}
const onNewGameFailure = function () {
  $('#message').text('Sorry, something went wrong')
}
const onCellClickSuccess = function () {
  console.log('in then')
}
const onCellClickFailure = function () {
  $('#message').text('Sorry, something went wrong')
}
module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onNewGameSuccess,
  onNewGameFailure,
  onCellClickSuccess,
  onCellClickFailure
}
