'use strict'
const store = require('./store')
const { apiUrl } = require('./config')
const signUp = function (data) {
  console.log(data)
  return $.ajax({
    url: apiUrl + '/sign-up',
    method: 'POST',
    data: data
  })
}

const signIn = function (data) {
  console.log(data)
  return $.ajax({
    url: apiUrl + '/sign-in',
    method: 'POST',
    data: data
  })
}

const signOut = function () {
  return $.ajax({
    url: apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.token
    }
  })
}
const newGame = function () {
  return $.ajax({
    url: apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.token
    }
  })
}

const cellClick = function (game) {
  console.log('in update api')
  console.log(game)
  return $.ajax({
    url: apiUrl + '/games/' + store.id,
    method: 'PATCH',
    headers: { Authorization: 'Bearer ' + store.token },
    data: game
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  newGame,
  cellClick
}
