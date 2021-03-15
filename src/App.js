import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import About from './components/layout/About';
import Services from './components/layout/Services';
import Contact from './components/layout/Contact';
import Footer from './components/layout/Footer';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';

  
const App = () => 
<Router>
  <Fragment>
    <Navbar />
    <Route exact path='/' component={Landing}/>
    <Route exact path='/about' component={About}/>   
    <Route exact path='/services' component={Services}/>          
    <Route exact path='/contact' component={Contact}/>
    <Footer />
  </Fragment>
</Router>


export default App;

