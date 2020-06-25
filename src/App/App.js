import React from 'react'
import {Route, Switch} from 'react-router-dom'
import './App.scss'
import Main from './pages/Main/Main'
import Nav from "../Common/components/Nav/Nav";
import Hook from "./pages/Hook/Hook";
import ReduxComponent from "./pages/Redux/Redux";

function App() {
  return (
    <div className="App">
      <Nav/>
      <div className='page'>
        <Switch>
          <Route path='/' component={Main} exact/>
          <Route path='/redux' component={ReduxComponent}/>
        </Switch>
      </div>
    </div>
  );
}

export default App;
