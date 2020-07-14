import React from 'react';
import { Container } from 'react-bootstrap';
import f1 from '../images/f1.jpg';
import f3 from '../images/f3.jpg';
import f4 from '../images/f4.jpg';

//import  from 'react-bootstrap';

const Home = () =>{

    return(
        <div className="container">
            <img id="f1" src={f1}/>
            
            <div className="container p-3 my-3 border">
              <h1 className="center">Welcome to Ottawa-center Soccer Club!</h1>
              <br/>
              <p className="center" id="h3">Address: 123 Bank St, Ottawa, ON K1K 2K2</p>
              <br/>
              <p className="center" id="h3">Office hours:</p>
              <p className="center">Week days: 11:00 a.m - 5:00 p.m</p>
              <p className="center">Weekends: Closed</p>
            </div>               
        </div>
    )
}

export default Home;