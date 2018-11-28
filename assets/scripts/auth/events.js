'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onSignUp = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  // take this data and send it to our server
  // using an HTTP request (POST)
  api.signUp(data)
    .then(ui.signUpSuccess) // if your request was succesful
    .catch(ui.signUpFailure) // if your request failed
}

const onSignIn = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = event => {
  event.preventDefault()
  $('#sign-up').show()
  $('#sign-in').show()
  $('#change-password').hide()
  $('#sign-out').hide()
  console.log()
  document.getElementById('sign-up').hidden = false
  document.getElementById('sign-in').hidden = false
  document.getElementById('textInput').hidden = true
  document.getElementById('submit-button').hidden = true
  document.getElementById('my-to-dos').hidden = true
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

// const onTextInput = event => {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   api.textInput(data)
//     .then(ui.textInputSuccess)
//     .catch(ui.textInputFailure)

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut
  // onTextInput
}
