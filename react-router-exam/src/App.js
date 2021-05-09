import './App.css';
import React, { Component } from 'react';
import Nav from './components/Nav';
import About from './components/About'
import Main from './components/Main'
import Lessons from './components/Lessons'
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Nav />
        <Switch>        
          {/* exact 정확히 url 이 일치했을때  */}
          <Route exact path='/' component={Main} />    
          <Route path='/about' component={About} />
          <Route path='/lessons' component={Lessons} />
          <Route component={ () => <h2>Not Found</h2> }/>   
          {/*  switch 문으로 route를 묶으면 예외케이스 등을 추가  */}
        </Switch>
        
      </div>
    );
  } 
}

export default App;
