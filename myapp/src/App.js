import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import Navbar from './components/Navbar';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './components/Home';
import Facilities from './components/Facilities';
import Contact from './components/Contact';
import Coaches from './components/Coaches';
import U18 from './components/U18';
import Adults from './components/Adults';
import Seniors from './components/Seniors';
import Register from './components/Register';
import {Trans, useTranslation} from 'react-i18next';


function App() {
  const {t, i18n} = useTranslation()
  const changeLanguage = (language) =>{
    i18n.changeLanguage(language)
  }
  
    return (
     
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Route exact path='/' component={Home}/>
          <Route path='/facilities' component={Facilities}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/coaches' component={Coaches}/>
          <Route path='/register' component={Register}/>
          <Route path='/programs/u18' component={U18}/>
          <Route path='/programs/adults' component={Adults}/>
          <Route path='/programs/seniors' component={Seniors}/>
        </div>
      </BrowserRouter>
    );
  
  
}

export default App;