import React, { Component } from 'react'
import Button from './Button'

export default class Form extends Component {
  render() {
    return (
      <div className="form">
        <h1>Create a new task</h1>
        <input name="title" placeholder="Here goes the title" onChange={this.props.titleChange}></input>
        <input name="title" placeholder="Here goes the body" onChange={this.props.bodyChange}></input>
        <Button onClick={this.props.onClick}>Create</Button>
      </div>
    )
  }
}
