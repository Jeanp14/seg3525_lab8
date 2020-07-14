import React from 'react';
import { Button, Form, Dropdown } from 'react-bootstrap';
import TimePicker from 'react-time-picker';
import email from '../images/email.png';
import phone from '../images/phone.png';
import f5 from '../images/f5.jpg';
import f6 from '../images/f6.jpg';
import f7 from '../images/f7.jpg';

const Facilities = () =>{
    function selectO(){
        document.getElementById("f").innerHTML = "Outdoor";
    }
    
    function selectA(){
        document.getElementById("f").innerHTML = "Outdoor(artificial)";
    }
    
    function selectI(){
        document.getElementById("f").innerHTML = "Indoor";
    }
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
                                        <input type="name" className="form-control" placeholder="Enter name" id="name" />
                                    </div>
                                    <div className="form-group">
                                        <label for="email">Email:</label>
                                        <input type="email" className="form-control" placeholder="abc123@example.com" id="email"/>
                                    </div>
                                    <div className="form-group">
                                        <label for="number">Phone number:</label>
                                        <input className="form-control" placeholder="xxx-xxx-xxxx" id="number"/>
                                    </div>

                                    <br/>
  
                                    <div className="form-group">
                                        <label for="button">Please select a field to see availability</label>
                                        <Dropdown>
                                            <Dropdown.Toggle id="dropdown-basic-button" title="Dropdown button">
                                                Choose field
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item onClick="" id="o">Outdoor</Dropdown.Item>
                                                <Dropdown.Item onClick="selectA()" id="a">Outdoor(artificial)</Dropdown.Item>
                                                <Dropdown.Item onClick="selectI()" id="i">Indoor</Dropdown.Item>
                                            </Dropdown.Menu>
                                        
                                        </Dropdown>
                                    </div>
  
                                    <br/>
                
                                    <div className="form-group">
                                        <label for="dateInput" id="chooseTxt">Choose date:</label>
                                        <input type="date"/>
                                    </div>

                                    <div className="form-group">
                                    <label for="timeInput" id="chooseTxt">Choose time:</label>
                                        <input type="time"/>
                                    </div>  
                                    
                
                                    <div className="form-group">
                                        <label for="credit">Credit card:</label>
                                        <input className="form-control" placeholder="xxxx xxxx xxxx xxxx" id="credit" />
                                    </div> 
  
                                    <button type="submit" className="btn btn-primary" id="book">Submit</button> 
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

export default Facilities;