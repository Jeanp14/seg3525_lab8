import React from 'react';
import { Button, Form, Dropdown, NavDropdown } from 'react-bootstrap';
import {Link, NavLink} from 'react-router-dom';
import ball from '/Users/Jean-Pamphile/Desktop/seg3525_lab8/myapp/src/images/ball.png';

const Navbar = () =>{
    return(
        <nav className="nav-wrapper red darken-3">
            <div className="container"> 
                <a className="brand-logo">OCSC <img src={ball}/></a>
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/facilities">Facilities</Link></li>
                    <li><NavDropdown title="Programs" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/programs/u18">Under 18</NavDropdown.Item>
                        <NavDropdown.Item href="/programs/adults">Adults</NavDropdown.Item>
                        <NavDropdown.Item href="/programs/seniors">Seniors</NavDropdown.Item>
                        </NavDropdown>
                    </li>
                    <li><Link to="/coaches">Coaches</Link></li>
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;