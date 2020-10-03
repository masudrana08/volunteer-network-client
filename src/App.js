import React, { useEffect } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './Components/Home/Home';

export const myHost='http://localhost:3001'
function App() {

  return (
    <Router>
      
      <Switch>
        <Route path='/'>
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
