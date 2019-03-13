import React, { Component } from 'react'

export default class TaskCard extends Component {
  render() {
    return (
      <div className="task-card">
        <h1 className="task-title">{this.props.title}</h1>
        <p className="task-body">{this.props.body}</p>
      </div>
    )
  }
}
