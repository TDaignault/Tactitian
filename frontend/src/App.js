import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar  from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import ModelDetails from './components/models/ModelDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateModel from './components/models/CreateModel'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/model/:id' component={ModelDetails} />
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
          <Route path='/create' component={CreateModel} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
