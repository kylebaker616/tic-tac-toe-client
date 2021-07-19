'use strict'
const store = require('./store')
const onSignUpSuccess = function (response) {
  console.log('in then')
  $('#message').text(`Thank you for signing up ${response.user.email}`)
  $('#sign-up').trigger('reset')
}

const onSignUpFailure = function (response) {
  console.log('in catch')
  $('#message').text('Sign up failed')
  $('#sign-up').trigger('reset')
}
const onSignInSuccess = function (response) {
  console.log('in then')
  $('#message').text(`Now signed in as ${response.user.email}`)
  store.token = response.user.token
  $('#sign-in').trigger('reset')
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#sign-out').show()
  $('#new-game').show()
  $('#sign-in-title').hide()
  $('#sign-up-title').hide()
  // $('#change-password').show()
}

const onSignInFailure = function (response) {
  console.log('in catch')
  $('#message').text('Sign in failed, please enter a valid Email and password.')
  $('#sign-in').trigger('reset')
}

const onSignOutSuccess = function (response) {
  console.log('in then')
  $('#message').text('Signed Out')
  $('#sign-in').show()
  $('#sign-up').show()
  $('#sign-out').hide()
  $('.container').hide()
  $('#new-game').hide()
}

const onSignOutFailure = function (response) {
  console.log('in catch')
  $('#message').text('Sign Out Failed')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure
}
