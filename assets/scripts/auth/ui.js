'use strict'

const store = require('../store.js')

const signUpSuccess = data => {
  $('#message').text('You signed up! Please sign in!')
  $('#message').removeClass()
  $('#message').addClass('success')
  // clears sign up information
  $('#sign-up').trigger('reset')
  // console.log('signUpSuccess ran. Data is :', data)
  $('#sign-up').hide()
}

const signUpFailure = data => {
  $('#message').text('Error on sign up')
  $('#message').removeClass()
  $('#message').addClass('failure')
  // clears sign up information
  $('#sign-up').trigger('reset')
  // console.error('signUpFailure ran. Error is :', error)
}

const signInSuccess = data => {
  store.user = data.user
  $('#sign-up').hide()
  $('#sign-in').hide()
  document.getElementById('change-password').hidden = false
  document.getElementById('textInput').hidden = false
  document.getElementById('my-to-dos').hidden = false
  document.getElementById('sign-out').hidden = false
  document.getElementById('submit-button').hidden = false
  $('#message').text('You signed in! Create some To-Dos!')
  $('#message').removeClass()
  $('#message').addClass('success')
  // console.log('signInSuccess ran. Data is :', data)
  $('#sign-in').trigger('reset')
}

const signInFailure = data => {
  $('#message').text('Error on sign in')
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('#sign-in').trigger('reset')
  // console.error('signInFailure ran. Error is :', error)
}

const changePasswordSuccess = data => {
  $('#message').text('You changed your password!')
  $('#message').removeClass()
  $('#message').addClass('success')
  // console.log('changePasswordSuccess ran. Data is :', data)
  $('#change-password').trigger('reset')
}

const changePasswordFailure = data => {
  $('#message').text('Error on password change')
  $('#message').removeClass()
  $('#message').addClass('failure')
  // console.error('changePasswordFailure ran. Error is :', error)
  $('#change-password').trigger('reset')
}

const signOutSuccess = data => {
  $('#message').text('Bye now!')
  store.user = null
  $('#message').removeClass()
  $('#message').addClass('success')
  // console.log('signOutSuccess ran. Data is :', data)
}

const signOutFailure = data => {
  $('#message').text('Error on sign out')
  $('#message').removeClass()
  $('#message').addClass('failure')
  // console.error('signOutFailure ran. Error is :', error)
}

// const textInputSuccess = data => {
//   $('#message').text('You created an item for your to-do list!')
//   $('#message').removeClass()
//   $('#message').addClass('success')
//   $('#textInput').trigger('reset')
// }
//
// const textInputFailure = data => {
//   $('#message').text('Error on to-do item creation')
//   $('#message').removeClass()
//   $('#message').addClass('failure')
//   // console.error('signUpFailure ran. Error is :', error)
//   $('#textInput').trigger('reset')
// }

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
  // textInputSuccess,
  // textInputFailure
}
