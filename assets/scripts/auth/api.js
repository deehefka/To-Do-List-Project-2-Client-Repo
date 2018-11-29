'use strict'

const config = require('../config.js')
const store = require('../store.js')

// taken from class lecture and TTT
const signUp = data => {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data
  })
}

// taken from class lecture and TTT
const signIn = data => {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data
  })
}

// taken from class lecture and TTT
const changePassword = data => {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

// taken from class lecture and TTT
const signOut = () => {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// const todoListCreate = data => {
//   return $.ajax({
//     url: config.apiUrl + '/todo_lists',
//     method: 'POST',
//     headers: {
//       contentType: 'application/json',
//       Authorization: 'Token token=' + store.user.token
//     },
//     data: {
//       todo_list: {
//         title: data.title,
//         description: data.description
//       }
//     }
//   })
// }

const todoListCreate = data => {
  return $.ajax({
    url: config.apiUrl + '/todo_lists',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const todoListUpdate = (data, id) => {
  return $.ajax({
    url: config.apiUrl + `/todo_lists/${id}`,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const todoListDelete = id => {
  return $.ajax({
    url: config.apiUrl + '/todo_lists/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
    // data: {}
  })
}

const todoListIndex = () => {
  return $.ajax({
    url: config.apiUrl + '/todo_lists',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
    // data: data
  })
}

const todoListShow = (id) => {
  return $.ajax({
    url: config.apiUrl + `/todo_lists/${id}`,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
    // data: {}
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  todoListCreate,
  todoListUpdate,
  todoListDelete,
  todoListIndex,
  todoListShow
}
