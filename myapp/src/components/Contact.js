import React from 'react';
import { Form, Button } from 'react-bootstrap';
import email from '../images/email.png';
import phone from '../images/phone.png';

const Contact = () =>{
    return(
        <div className="container p-3 my-3 border">    
           
              <h1>Contact</h1>
                <input type="text" className="row-10" placeholder="Leave us comments here..."/><Button>Send</Button>
                <br/><br/>
                <p><img src={phone}/> 613-123-456</p>
                <p><img src={email}/> ocsc@gmail.ca</p>    
           
        </div>
    )
}

export default Contact;