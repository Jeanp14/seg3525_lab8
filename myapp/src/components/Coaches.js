import React from 'react';
import { Button, Form, Dropdown, Card } from 'react-bootstrap';
import c1 from '../images/c1.jpg';
import c2 from '../images/c2.jpg';
import c4 from '../images/c4.jpg';

const Coaches = () =>{
    return(
        <div className="container p-3 my-3 border">    
           
            <h1>Coaches</h1>
              
            <table>
              <td>
                <div className="card">
                    <img className="card-img-top" src={c1} alt="Card image"/>
                    <div className="card-body">
                        <h4 className="card-title">Mikel</h4>
                        <p className="card-text">Coach for competitive teams</p>
                    </div>
                </div>
                </td>
                <td>
                <div className="card">
                    <img className="card-img-top" src={c2} alt="Card image"/>
                    <div className="card-body">
                    <h4 className="card-title">Pep</h4>
                    <p className="card-text">Coach for recreational teams</p>
                    </div>
                </div>
                </td>
                <td>
                <div className="card">
                    <img className="card-img-top" src={c4} alt="Card image"/>
                    <div className="card-body">
                    <h4 className="card-title">Jose</h4>
                    <p className="card-text">Coach for seniors teams</p>
                    </div>
                </div>
                </td>
            </table>    
           
        </div>
    )
}

export default Coaches;
