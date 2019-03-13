import React, { Component } from 'react'
import Button from './Button'
import TaskCard from './TaskCard'
import Form from './Form'
import TaskInstance from '../providers/TaskProvider'

export default class TodoContainer extends Component {
  
  state = {
    isShowingForm: false,
    title: "",
    body: "",
  }
 
  handleClick = () => {
    if (this.state.isShowingForm) {
      this.setState({
        isShowingForm: false
      })
    }
    else {
      this.setState({
        isShowingForm: true
      })
    }
  }
  handleTitle = (e) => {
    this.setState({
      title: e.target.value
    })
  }
  handleBody = (e) => {
    this.setState({
      body: e.target.value
    })
  }
  create = () => {
    TaskInstance.create(this.state.title, this.state.body)
      .then((res) => res)
      .then(() => {
        this.setState({
          isShowingForm: false,
        })
      })
  }

  render() {
    const tasks = this.props.tasks;
    const state = this.state;
    return (
      <div className="todo-container">
        <h1>To do</h1>
        {tasks.map((task) => {
          return <TaskCard key={task._id} title={task.title} body={task.body}></TaskCard>
        })}
        <Button onClick={this.handleClick}>New</Button>
        {state.isShowingForm ? <Form titleChange={this.handleTitle} bodyChange={this.handleBody} onClick={this.create}></Form> : false}
      </div>
    )
  }
}
