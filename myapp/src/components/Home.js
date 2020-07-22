import React, {Component} from 'react';
import { Container, Button } from 'react-bootstrap';
import f1 from '../images/f1.jpg';
import f3 from '../images/f3.jpg';
import f4 from '../images/f4.jpg';
import {Trans, useTranslation} from 'react-i18next';
//import  from 'react-bootstrap';

function Home(){
    const {t, i18n} = useTranslation()
    const changeLanguage = (language) =>{
      i18n.changeLanguage(language)
    }
     
    return(
        <div className="container">
            <br/>
            <button onClick={()=>changeLanguage("en")}>EN</button>
          <button onClick={()=>changeLanguage("fr")}>FR</button>
            <img id="f1" src={f1}/>
            
            <div className="container p-3 my-3 border">
              <h1 className="center"><Trans i18nKey="description.part1"></Trans></h1>
              <br/>
              <p className="center" id="h3"><Trans i18nKey="description.part2"></Trans></p>
              <br/>
              <p className="center" id="h3"><Trans i18nKey="description.part3"></Trans></p>
              <p className="center"><Trans i18nKey="description.part4"></Trans></p>
              <p className="center"><Trans i18nKey="description.part5"></Trans></p>
              
            </div>               
        </div>
    )
}

export default Home;