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
          <Route  path='/resume' component={Resume}/>
          <Route  path='/portfolio' component={Portfolio}/>
          <Route  path='/contact' component={Contact}/>
          <Route  path='/test' component={Test}/>

          </Switch>
    </BrowserRouter>
     </React.Fragment>
    </div>
  );
}

export default App;
