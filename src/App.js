import React, { Component } from 'react';
import Hello from './components/Hello';
import Test from './components/Test';
import Button from './Button';
import User from './User';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      users:[
    { username: 'Jerry', age: 21, gender: 'male' },
    { username: 'Tomy', age: 22, gender: 'male' },
    { username: 'Lily', age: 19, gender: 'female' },
    { username: 'Lucy', age: 20, gender: 'female' }
    ],
      color:'red'
    }
  }

  componentDidMount(){
     let color = ['green','blue','yellow']
     console.log(this.refs.hello.sayHello())
     setInterval(() => {
       this.setState({color:color[parseInt(Math.random()*3,10)]})
     },1000)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button color={this.state.color}/>
        <User users={this.state.users}/>
        <Hello ref='hello'/>

        <Test>
                    <li>0</li>
                    <li>1</li>
                    <li>2</li>
        </Test>
      </div>
    );
  }
}

export default App;
