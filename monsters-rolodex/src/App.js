import './App.css';
import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component'

class App extends Component {

constructor() {
  super();

  this.state = {
    monsters:[]
  
}
};


componentDidMount() {
  const getUsers = new Promise((resolve, reject) => {
      fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({monsters: users})) 
      .catch(error => console.log("error returning data"));
  });
  
  getUsers
  .catch(error => console.log("error returning data"));
  
}

render() {


  return (
    <div className="App">
    <CardList monsters={this.state.monsters}></CardList>
    </div>
  );

}
};




export default App;
