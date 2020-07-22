import React from 'react';
import { Button, Form, Dropdown, Input, Tooltip } from 'react-bootstrap';
import Select2 from './Validate';
import Component from 'react';
import {Trans, useTranslation} from 'react-i18next';


class Register extends React.Component{
  
  constructor(){
    super()
    this.state={
      submitted:false,
      named:false,
      emailed:false,
      numbered:false,
      selected:false,
      creditted:false,
      //show:false
    };
  }

  handleName = (named) =>{
    this.setState({named:true})
  };

  handleEmail = (emailed) =>{
    this.setState({emailed:true})
  };

  handleNumber = (numbered) =>{
    this.setState({numbered:true})
  };

  handleSelect = (selected) =>{
    this.setState({selected:true})
  };

  handleCredit = (creditted) =>{
    this.setState({creditted:true})
  };

  handleSubmit = (submitted) =>{
    this.setState({submitted:true});
    
      alert("Your registration has been confirmed!");
    
  };

  render(){
    
    const {
      submitted
    } = this.state;
    return(
        <div className="container p-3 my-3 border">    
           <h1 className="center">Registration</h1>
           <div className="container p-3 my-3 border" id="appt2" >
               
                <form >
                <div className="form-group">
                  <label for="name2">Name:</label>
                  <input type="name" className="form-control" placeholder="Enter fullname" id="name2" pattern="([A-Za-z]+(\s)?[A-Za-z]*)+" onChange={this.handleName}/>
                </div>
                <div className="form-group">
                  <label for="email2">Email:</label>
                  <input type="email" className="form-control" placeholder="abc123@example.com" id="email2" pattern="[A-Za-z0-9]*@[A-Za-z0-9]*.(com|ca|fr|org)" onChange={this.handleEmail}/>
                </div>
                <div className="form-group">
                  <label for="number2">Phone number:</label>
                  <input type="tel" className="form-control" placeholder="xxx-xxx-xxxx" id="number2" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" onChange={this.handleNumber}/>
                </div>
                <br/>
                <div className="form-group">
                  <label for="button">Please select a category</label>
                  <Select2 onChange={this.handleSelect}/>
                </div>
                <br/>
                <div className="form-group">
                  <label for="credit2">Credit card:</label>
                  <input className="form-control" placeholder="xxxx xxxx xxxx xxxx" id="credit2" pattern="[0-9]{4}\s[0-9]{4}\s[0-9]{4}\s[0-9]{4}" onChange={this.handleCredit}/>
                </div> 

                {this.state.creditted &&
                  <button type="submit" className="btn btn-primary" id="reg" onClick={this.handleSubmit}>Submit</button>
                }
                </form>             
            </div>
           
        </div>
    )
  }
}

export default Register;