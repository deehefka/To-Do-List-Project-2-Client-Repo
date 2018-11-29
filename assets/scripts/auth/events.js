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
  document.getElementById('my-to-dos').hidden = true
  document.getElementById('todo_list-create').hidden = true
  document.getElementById('todo_list-update').hidden = true
  document.getElementById('todo_list-show').hidden = true
  document.getElementById('todo_list-index').hidden = true
  document.getElementById('todo_list-delete').hidden = true
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onTodoListCreate = event => {
  event.preventDefault()
  $('#todo-item').show()
  $('#list').show()
  // document.getElementById('todo-item').hidden = false
  // document.getElementById('list').hidden = false
  const data = getFormFields(event.target)
  api.todoListCreate(data)
    .then(ui.todoListCreateSuccess)
    .catch(ui.todoListCreateFailure)
}

const onTodoListUpdate = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.todoListUpdate(data)
    .then(ui.todoListUpdateSuccess) // if your request was succesful
    .catch(ui.todoListUpdateFailure) // if your request failed
}

const onTodoListShow = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.todoListShow(data)
    .then(ui.todoListShowSuccess) // if your request was succesful
    .catch(ui.todoListShowFailure) // if your request failed
}

const onTodoListIndex = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.todoListIndex(data)
    .then(ui.todoListIndexSuccess) // if your request was succesful
    .catch(ui.todoListIndexFailure) // if your request failed
}

const onTodoListDelete = event => {
  event.preventDefault()
  api.todoListDelete()
    .then(ui.todoListDeleteSuccess) // if your request was succesful
    .catch(ui.todoListDeleteFailure) // if your request failed
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onTodoListCreate,
  onTodoListUpdate,
  onTodoListIndex,
  onTodoListShow,
  onTodoListDelete
}
