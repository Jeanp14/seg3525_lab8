import React from 'react';
import { Button, Form, Dropdown } from 'react-bootstrap';
import TimePicker from 'react-time-picker';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import email from '../images/email.png';
import phone from '../images/phone.png';
import f5 from '../images/f5.jpg';
import f6 from '../images/f6.jpg';
import f7 from '../images/f7.jpg';
import SelectF from './SelectF';

class Facilities extends React.Component{

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

      handleCredit = (creditted) =>{
        this.setState({creditted:true})
      };

    handleSubmit = (submitted, creditted) =>{
        this.setState({submitted:true});
        
          alert("Your registration has been confirmed!");
        
      };
    
    render(){
    return(
        <div>
           
            <div className="container p-3 my-3 border">
              <h1 className="center">Facilities</h1>
              <br/>
              <br/>
              <p className="center">Outdoor(20$)</p>
              <img className="center-image" src={f7}/>
              <br/>
              <br/>
              <p className="center">Outdoor(artificial)(15$)</p>
              <img className="center-image" src={f5}/>
              <br/>
              <br/>
              <p className="center">(Indoor)(10$)</p>
              <img className="center-image" src={f6}/>
            </div>
            <div className="container p-3 my-3 border">
                <h1 className="center">Rent a field</h1>
                <br></br>
                <table className="table table-borderless">
                    <tbody>
                        <tr>
                            <td className="container py-3 my-3 border" id="t1">
                                <form>
                                    <div className="form-group">
                                        <label for="name">Name:</label>
                                        <input type="name" className="form-control" placeholder="Enter name" id="name" pattern="([A-Za-z]+(\s)?[A-Za-z]*)+"/>
                                    </div>
                                    <div className="form-group">
                                        <label for="email">Email:</label>
                                        <input type="email" className="form-control" placeholder="abc123@example.com" id="email" pattern="[A-Za-z0-9]*@[A-Za-z0-9]*.(com|ca|fr|org)"/>
                                    </div>
                                    <div className="form-group">
                                        <label for="number">Phone number:</label>
                                        <input type="tel" className="form-control" placeholder="xxx-xxx-xxxx" id="number" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"/>
                                    </div>

                                    <br/>
  
                                    <div className="form-group">
                                        <label for="button">Please select a field to see availability</label>
                                        <SelectF></SelectF>
                                    </div>
  
                                    <br/>
                
                                    <div className="form-group">
                                        <label for="dateInput" id="chooseTxt">Choose date:</label>
                                        <input type="date" min="2020-07-20" max="2020-08-01"/>
                                    </div>

                                    <div className="form-group">
                                    <label for="timeInput" id="chooseTxt">Choose time:</label>
                                        <input type="time" min="18:00" max="23:00"/>
                                    </div>  
                                    
                
                                    <div className="form-group">
                                        <label for="credit">Credit card:</label>
                                        <input className="form-control" placeholder="xxxx xxxx xxxx xxxx" id="credit" onChange={this.handleCredit}/>
                                    </div> 

                                    {this.state.creditted &&
                                    <button type="submit" className="btn btn-primary" id="book" onClick={this.handleSubmit}>Submit</button> 
                                    }
                                </form>
                            </td>
                            <td><div className="container p-3 my-3 border" id="t2">
                                <h1>Contact</h1>
                                    <p><img src={phone}/> 613-123-456</p>
                                    <p><img src={email}/> ocsc@gmail.ca</p>    
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br/>
            </div>
        </div>
    )
    }
}

export default Facilities;