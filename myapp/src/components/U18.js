import React from 'react';
import { Button, Form, Dropdown } from 'react-bootstrap';

const U18 = () =>{
    return(
        <div className="container p-3 my-3 border">    
           
           <h1>Under 18</h1>
            <br/>
            <h3>Competitive</h3>
            <h4>U9-U18 Boys</h4>
            <p>-Regional</p>
            <p>-Tier 1</p>
            <p>-Tier 2</p>
            <p>-Tier 3</p>
            <h4>U9-U18 Girls</h4>
            <p>-Regional</p>
            <p>-Tier 1</p>
            <p>-Tier 2</p>
            <p>-Tier 3</p>
            <h3>Recreational</h3>
            <p>U7-U18 Boys and Girls</p>
            <p>-Rec 1</p>
            <p>-Rec 2</p>
            <p>-Rec 3</p>    
            <br/>
            <a href="/register" id="big">Go to registration page</a> 
        </div>
    )
}

export default U18;