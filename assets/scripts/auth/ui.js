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
  document.getElementById('my-to-dos').hidden = false
  document.getElementById('todo_list-create').hidden = false
  document.getElementById('todo_list-update').hidden = false
  document.getElementById('todo_list-show').hidden = false
  document.getElementById('todo_list-index').hidden = false
  document.getElementById('todo_list-delete').hidden = false
  document.getElementById('sign-out').hidden = false
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

const todoListCreateSuccess = data => {
  // store.schemes = data.schemes
  $('#message').text('You created an item for your to-do list!')
  // document.getElementById('list-container').hidden = false
  // document.getElementById('todo-item').hidden = false
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#todo_list-create').trigger('reset')
}

const todoListCreateFailure = data => {
  $('#message').text('Error on to-do item creation')
  $('#message').removeClass()
  $('#message').addClass('failure')
  // console.error('signUpFailure ran. Error is :', error)
  $('#todo_list-create').trigger('reset')
}

const todoListShowSuccess = data => {
  // store.schemes = data.schemes
  $('#message').text('Here is one of your To-Do list items!')
  $('#message').removeClass()
  $('#message').addClass('success')
}

const todoListShowFailure = data => {
  $('#message').text('Failure on todo_list show')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

const todoListDeleteSuccess = data => {
  $('#message').text('You deleted a To-Do list item! Great job!')
  $('#message').removeClass()
  $('#message').addClass('success')
}

const todoListDeleteFailure = data => {
  $('#message').text('Failure on todo_list delete')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

const todoListUpdateSuccess = data => {
  // store.todo_lists = data.todo_lists
  $('#message').text('You updated an item for your to-do list!')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#todo_list-create').trigger('reset')
}

const todoListUpdateFailure = data => {
  $('#message').text('Error on to-do item update')
  $('#message').removeClass()
  $('#message').addClass('failure')
  // console.error('signUpFailure ran. Error is :', error)
  $('#todo_list-create').trigger('reset')
}

const todoListIndexSuccess = data => {
  // store.schemes = data.schemes
  $('#message').text('Here are all your To-Do list items!')
  $('#message').removeClass()
  $('#message').addClass('success')
}

const todoListIndexFailure = data => {
  $('#message').text('Failure on todo_list index')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  todoListCreateSuccess,
  todoListCreateFailure,
  todoListShowSuccess,
  todoListShowFailure,
  todoListDeleteSuccess,
  todoListDeleteFailure,
  todoListUpdateSuccess,
  todoListUpdateFailure,
  todoListIndexSuccess,
  todoListIndexFailure
}
