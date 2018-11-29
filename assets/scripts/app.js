'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events.js')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#todo_list-create').on('submit', authEvents.onTodoListCreate)
  $('#todo_list-index').on('submit', authEvents.onTodoListIndex)
  $('#todo_list-show').on('submit', authEvents.onTodoListShow)
  $('#todo_list-delete').on('submit', authEvents.onTodoListDelete)
  $('#todo_list-update').on('submit', authEvents.onTodoListUpdate)
})

// const createButton = document.getElementById('#addTaskButton')
// const newTitle = document.getElementById('#title')
// const newDescription = document.getElementById('#description')
// const listContainer = document.getElementById('#list-container')
// const templateElement = document.getElementById('#listItemTemplate')
// const template = templateElement.innerHTML
//
// createButton.addEventListener('click', function (event) {
//   const titleName = newTitle.value
//   const descriptionName = newDescription.value
//   listContainer.insertAdjacentHTML('afterbegin', titleName, descriptionName)
//
//   const taskHTML = template.replace('<!-- TASK_NAME -->', titleName)
//   listContainer.insertAdjacentHTML('afterbegin', taskHTML)
//
//   const descriptionHTML = template.replace('<!-- DESCRIPTION_NAME -->', descriptionName)
//   listContainer.insertAdjacentHTML('afterbegin', descriptionHTML)
// })
