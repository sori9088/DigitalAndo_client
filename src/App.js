import React from 'react';
import './App.scss';
import {Switch, Route} from 'react-router-dom'
import Main from './components/Main'
import Dashboard from './components/super/Dashboard'
import Problem_Machine from './components/user/Problem_Machine'

function App() {
  return (
    <>
    <Switch>
        <Route exact path='/' render={() => <Main />} />
        <Route exact path='/dashboard' render={() => <Dashboard />} />
        <Route exact path='/detail/:id' render={() => <Problem_Machine />} />
        {/* <Route exact path='/detail/:id' render={() => <Problem_... />} /> */}

    </Switch>
    </>
  );
}

export default App;
