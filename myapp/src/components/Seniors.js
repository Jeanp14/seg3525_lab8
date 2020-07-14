import React from 'react';
import { Button, Form, Dropdown } from 'react-bootstrap';

const Seniors = () =>{
    return(
        <div className="container p-3 my-3 border">    
           
           <h1>Seniors(over 35)</h1>
            <br/>
            <h5>This program is for old timers who wish to stay in shape while enjoying the beautiful game!</h5> 
            <br/>
            <a href="/register" id="big">Go to registration page</a> 
        </div>
    )
}

export default Seniors;