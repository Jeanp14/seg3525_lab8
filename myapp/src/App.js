import React, { Component } from 'react';
import { Dropdown, Form } from 'react-bootstrap';
import Navbar from './components/Navbar';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './components/Home';
import Facilities from './components/Facilities';
import Contact from './components/Contact';
import Coaches from './components/Coaches';
import U18 from './components/U18';
import Adults from './components/Adults';
import Seniors from './components/Seniors';
import Register from './components/Register';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Route exact path='/' component={Home}/>
          <Route path='/facilities' component={Facilities}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/coaches' component={Coaches}/>
          <Route path='/register' component={Register}/>
          <Route path='/programs/u18' component={U18}/>
          <Route path='/programs/adults' component={Adults}/>
          <Route path='/programs/seniors' component={Seniors}/>
        </div>
      </BrowserRouter>
    );
  }
  /* state = {
    todos: [
      {id: 1, content: 'buy some milk'},
      {id: 2, content: 'play mario kart'}
    ]
  }
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos
    });
  }
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  } */
}

export default App;