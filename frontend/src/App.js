import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap';

import Navigationbar from './components/Navigationbar'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProductsScreen from './screens/ProductsScreen'
import Contact from './components/Contact'
import Aboutus from './screens/Aboutus'

function App() {
  return (
    <Router>
      <Fragment>
        <Navigationbar />
        <main className="py-3">
          <Route path='/' component={HomeScreen} exact />
          <Route path='/admin' component={LoginScreen} />
          <Route path='/products' component={ProductsScreen} exact />
          <Route path='/contact' component={Contact} exact />
          <Route path='/aboutus' component={Aboutus} exact />
        </main>
      </Fragment>
    </Router>
  );
}

export default App;
