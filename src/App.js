import React, { createContext, useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Auth from './Components/Auth/Auth';
import RegistationForm from './Components/RegistationForm/RegistationForm';

export const myHost='http://localhost:3001'
export const UserContext = createContext()
function App() {
  const [user,setUser]=useState({isSignedUp:true})
  return (
    <UserContext.Provider value={[user,setUser]}>
      <Router>

      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>

        <Route exact path='/auth'>
          <Auth></Auth>
        </Route>

        <Route exact path='/registation-form'>
          <RegistationForm></RegistationForm>
        </Route>

        <Route path='*'>
          <NotFound></NotFound>
        </Route>

      </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
