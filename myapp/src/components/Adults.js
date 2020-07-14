import React from 'react';
import { Button, Form, Dropdown } from 'react-bootstrap';

const Adults = () =>{
        return(
        <div className="container p-3 my-3 border">    
           
            <h1>Adults</h1>
            <br/>
            <h3>Competitive</h3>
            <h3>Men</h3>
            <p>-Regional</p>
            <p>-Tier 1</p>
            <p>-Tier 2</p>
            <p>-Tier 3</p>
            <h3>Women</h3>
            <p>-Regional</p>
            <p>-Tier 1</p>
            <br/>
            <h3>Recreational(Men and Women)</h3>
            <p>-Rec 1</p>
            <p>-Rec 2</p>
            <br/>
            <a href="/register" id="big">Go to registration page</a> 
        </div>
    )
}

export default Adults;