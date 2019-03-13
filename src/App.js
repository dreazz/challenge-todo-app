import React, { Component } from 'react';
import TodoContainer from './components/TodoContainer'
import TaskInstance from './providers/TaskProvider'
import logo from './logo.svg';
import './App.css';



class App extends Component {
  state = {
    tasks:[]
  }
  componentDidMount= ()=>{
   TaskInstance.show()
   .then((res)=>{
       this.setState({
        tasks:res
      })
    })

    .catch((err)=>{
      return err
    })
   
    
  }
  
  render() {
    return (
      <div className="App">
       <TodoContainer tasks={this.state.tasks}></TodoContainer>
      </div>
    );
  }
}

export default App;
