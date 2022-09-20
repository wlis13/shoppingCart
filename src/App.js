import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router-dom'
import CardProducts from './pages/CardProducts';
import Form from './pages/Form';
import Home from './pages/Home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <div>
            <Route path="/card" component={ CardProducts } />
            <Route exact path="/" component={ Home } />
            <Route exact path="/form" component={ Form } />
          </div>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
