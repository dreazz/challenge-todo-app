import React, { Component } from 'react'
import axios from 'axios'
const task = axios.create({
  baseURL: 'http://localhost:4000/api/v1/',
  /* other custom settings */
});
class TaskProvider {
  show = () => {
    return task.get('todos')
      .then((data) => data.data)
      .catch((err) => err)
  }
  create = (title, body) => {
    return task.post('todos', { title: title, body: body })
      .then((res) => res)
  }
}
const TaskInstance = new TaskProvider()
export default TaskInstance