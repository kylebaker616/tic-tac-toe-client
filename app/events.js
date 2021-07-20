'use strict'
const getFormFields = require('../lib/get-form-fields')
const api = require('./api')
const store = require('./store')
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
  $('.game-cell').removeClass('x')
  $('.game-cell').removeClass('o')
  $('.game-cell').empty()
  gamePlay = true
  api.newGame()
    .then(ui.onNewGameSuccess)
    .catch(ui.onNewGameFailure)
}

// const cells = $('.game-cell').toArray()
// $(cells).each()
const handleWin = function (player) {
  gamePlay = false
  if (player === 'x') {
    $('.status').text(`${player} has won!`)
  } else {
    $('.status').text(`${player} has won!`)
  }
}

const gameStatus = function () {
  const cells = $('.game-cell').toArray()
  $('cells').each()
  const zero = cells[0].classList[1]
  const one = cells[1].classList[1]
  const two = cells[2].classList[1]
  const three = cells[3].classList[1]
  const four = cells[4].classList[1]
  const five = cells[5].classList[1]
  const six = cells[6].classList[1]
  const seven = cells[7].classList[1]
  const eight = cells[8].classList[1]
  console.log(zero, one, two, three, four, five, six, seven, eight)

  if (zero && zero === one && zero === two) {
    handleWin(zero)
    cells[0].classList.add('won')
    cells[1].classList.add('won')
    cells[2].classList.add('won')
  } else if (three && three === four && three === five) {
    handleWin(three)
    cells[3].classList.add('won')
    cells[4].classList.add('won')
    cells[5].classList.add('won')
  } else if (six && six === seven && six === eight) {
    handleWin(six)
    cells[6].classList.add('won')
    cells[7].classList.add('won')
    cells[8].classList.add('won')
  } else if (zero && zero === three && zero === six) {
    handleWin(zero)
    cells[0].classList.add('won')
    cells[3].classList.add('won')
    cells[6].classList.add('won')
  } else if (one && one === four && one === seven) {
    handleWin(one)
    cells[1].classList.add('won')
    cells[4].classList.add('won')
    cells[7].classList.add('won')
  } else if (two && two === five && two === eight) {
    handleWin(two)
    cells[2].classList.add('won')
    cells[5].classList.add('won')
    cells[8].classList.add('won')
  } else if (zero && zero === four && zero === eight) {
    handleWin(zero)
    cells[0].classList.add('won')
    cells[4].classList.add('won')
    cells[8].classList.add('won')
  } else if (two && two === four && two === six) {
    handleWin(two)
    cells[2].classList.add('won')
    cells[4].classList.add('won')
    cells[6].classList.add('won')
  } else if (zero && one && two && three && four && five && six && seven && eight) {
    gamePlay = false
    $('.status').text('It is a tie!')}
  else {
    xTurn = !xTurn
    if (xTurn) {
      $('.status').text('X is next')
    } else {
      $('.status').text('O is next')
    }
  }
}

const onCellClick = function (event) {
  console.log('clicked')
  // console.log(event.target.id)
  const box = event.target.id
  console.log(box)
  const cellStatus = event.target.classList
  if (!gamePlay || cellStatus[1] === 'x' || cellStatus[1] === 'o') {
    return null
  }
  if (xTurn === true) {
    cellStatus.add('x')
    gameStatus()
    // xTurn = !xTurn
  } else {
    cellStatus.add('o')
    gameStatus()
    // xTurn = !xTurn
  }
  $(event.target).text(cellStatus[1])
  store.cellIndex = $(event.target).data('cell-index')
  const game = {
    game: {
      cell: {
        index: store.cellIndex,
        value: cellStatus[1]
      },
      over: false
    }
  }


  api.cellClick(game)
}

let xTurn = true
let gamePlay = true

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onNewGame,
  onCellClick
}
