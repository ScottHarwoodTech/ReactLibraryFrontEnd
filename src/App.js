import React, { Component } from 'react';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import NavBar from './components/layout/NavBar'
import Pane from "./components/data/pane"
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path = "/" render = {(props) => (<div><Pane {...props} pathV="http://192.168.102.16:8080/list/books"/>,
          <Pane {...props} pathV="http://192.168.102.16:8080/list/articles"/>,
          <Pane {...props} pathV="http://192.168.102.16:8080/list/sites"/></div>)} />
          <Route path="/books" render={(props) => <Pane {...props} pathV="http://192.168.102.16:8080/list/books"/>}/>
          <Route path="/ja" render={(props) => <Pane {...props} pathV="http://192.168.102.16:8080/list/articles"/>}/>
          <Route path="/sites" render={(props) => <Pane {...props} pathV="http://192.168.102.16:8080/list/sites"/>}/>
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
