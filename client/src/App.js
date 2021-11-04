import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from './components/index';
import Resume from './components/Resume'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'


function App() {
  return (
    <div className="App">
    <React.Fragment>
    <CssBaseline/>
    <BrowserRouter>
          <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/resume' component={Resume}/>
          <Route exact path='/portfolio' component={Portfolio}/>
          <Route exact path='/contact' component={Contact}/>

          </Switch>
    </BrowserRouter>
     </React.Fragment>
    </div>
  );
}

export default App;
