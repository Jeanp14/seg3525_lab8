import React from 'react';
import { Button, Form, Dropdown } from 'react-bootstrap';

const Register = () =>{
    return(
        <div className="container p-3 my-3 border">    
           <h1 className="center">Registration</h1>
           <div className="container p-3 my-3 border" id="appt2" >
               
                <form>
                <div className="form-group">
                  <label for="name2">Name:</label>
                  <input type="name" className="form-control" placeholder="Enter name" id="name2"/>
                </div>
                <div className="form-group">
                  <label for="email2">Email:</label>
                  <input type="email" className="form-control" placeholder="abc123@example.com" id="email2"/>
                </div>
                <div className="form-group">
                  <label for="number2">Phone number:</label>
                  <input className="form-control" placeholder="xxx-xxx-xxxx" id="number2"/>
                </div>
                
                <br/>
                <div className="form-group">
                  <label for="button">Please select a category</label>
                  <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic-button" title="Dropdown button">
                      Select
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item onclick="selectUC()" id="uc">U18s comp</Dropdown.Item>
                      <Dropdown.Item onclick="selectUR()" id="ur">U18s rec</Dropdown.Item>
                      <Dropdown.Item onclick="selectAC()" id="ac">Adults comp</Dropdown.Item>
                      <Dropdown.Item onclick="selectAR()" id="ar">Adults rec</Dropdown.Item>
                      <Dropdown.Item onclick="selectS()" id="s">Seniors</Dropdown.Item>  
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <br/>
                {/* <div className="form-group" id="age">
                  <label for="age">Age:</label>
                  <input type="number" className="form-control" placeholder="Enter age" id="age" max="18"/>
                </div>
                <div className="form-group" id="ucomp">
                  <label for="ucomp">Division:</label>
                  <div className="dropdown">
                    <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown" id="UC">
                      Select
                    </button>
                    <div className="dropdown-menu">
                      <li className="dropdown-header">Boys</li>
                      <a className="dropdown-item" onclick="selectBR()" id="br">Regional</a>
                      <a className="dropdown-item" onclick="selectB1()" id="b1">Tier 1</a>
                      <a className="dropdown-item" onclick="selectB2()" id="b2">Tier 2</a>
                      <a className="dropdown-item" onclick="selectB3()" id="b3">Tier 3</a>
                      <li className="dropdown-header">Girls</li>
                      <a className="dropdown-item" onclick="selectGR()" id="gr">Regional</a>
                      <a className="dropdown-item" onclick="selectG1()" id="g1">Tier 1</a>
                      <a className="dropdown-item" onclick="selectG2()" id="g2">Tier 2</a>
                      <a className="dropdown-item" onclick="selectG3()" id="g3">Tier 3</a>
                    </div>
                  </div>
                </div>
                <div className="form-group" id="urec">
                  <label for="urec">Division:</label>
                  <div className="dropdown">
                    <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown" id="UR">
                      Select
                    </button>
                    <div className="dropdown-menu">
                      <li className="dropdown-header">Boys and Girls</li>
                      <a className="dropdown-item" onclick="selectBG1()" id="ur1">Rec 1</a>
                      <a className="dropdown-item" onclick="selectBG2()" id="ur2">Rec 2</a>
                      <a className="dropdown-item" onclick="selectBG3()" id="ur3">Rec 3</a>
                    </div>
                  </div>
                </div>
                <div className="form-group" id="acomp">
                  <label for="acomp">Division:</label>
                  <div className="dropdown">
                    <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown" id="AC">
                      Select
                    </button>
                    <div className="dropdown-menu">
                      <li className="dropdown-header">Men</li>
                      <a className="dropdown-item" onclick="selectMR()" id="mr">Regional</a>
                      <a className="dropdown-item" onclick="selectM1()" id="m1">Tier 1</a>
                      <a className="dropdown-item" onclick="selectM2()" id="m2">Tier 2</a>
                      <a className="dropdown-item" onclick="selectM3()" id="m3">Tier 3</a>
                      <li className="dropdown-header">Women</li>
                      <a className="dropdown-item" onclick="selectWR()" id="wr">Regional</a>
                      <a className="dropdown-item" onclick="selectW1()" id="w1">Tier 1</a>
                    </div>
                  </div>
                </div>
                <div className="form-group" id="arec">
                  <label for="arec">Division:</label>
                  <div className="dropdown">
                    <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown" id="AR">
                      Select
                    </button>
                    <div className="dropdown-menu">
                      <li className="dropdown-header">Men and Women</li>
                      <a className="dropdown-item" onclick="selectMW1()" id="ar1">Rec 1</a>
                      <a className="dropdown-item" onclick="selectMW2()" id="ar2">Rec 2</a>           
                    </div>
                  </div>
                </div>
                <br/> */}

                <div className="form-group">
                  <label for="credit2">Credit card:</label>
                  <input className="form-control" placeholder="xxxx xxxx xxxx xxxx" id="credit2"/>
                </div> 

                <button type="submit" className="btn btn-primary" id="reg">Submit</button> 
                </form>             
            </div>
           
        </div>
    )
}

export default Register;