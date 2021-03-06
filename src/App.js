import React, {useState} from 'react';
import './App.scss';
import {Switch, Route} from 'react-router-dom'
import Main from './components/Main'
import Home from './components/Home'
import Dashboard from './components/super/Dashboard'
import Problem_Machine from './components/user/Problem_Machine'
import Problem_Materials from './components/user/Problem_Materials'
import Problem_Quality from './components/user/Problem_Quality'
import Problem_Technical from './components/user/Problem_Technical'

function App() {
  return (
    <>
    <Switch>
        <Route exact path='/' render={() => <Home />} />
        <Route exact path='/dashboard' render={() => <Dashboard />} />
        <Route exact path='/detail/machine' render={() => <Problem_Machine />} />
        <Route exact path='/detail/materials' render={() => <Problem_Materials />} />
        <Route exact path='/detail/quality' render={() => <Problem_Quality />} />
        <Route exact path='/detail/technical' render={() => <Problem_Technical />} />
    </Switch>
    </>
  );
}

export default App;
