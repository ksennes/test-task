import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';
import { HomeLayout } from './components/layouts/home-layout/home-layout';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={HomeLayout}/>
      </Switch>
    </Router>
  );
}

export default App;
