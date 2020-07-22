import React from 'react';
import {Dropdown, Form} from 'react-bootstrap';
import Select from 'react-select';
import Component from 'react';

const options5 = [
  { value: 'a1', label: 'Adults rec1' },
  { value: 'a2', label: 'Adults rec2' },
];

class Select6 extends React.Component {
  state = {
    selectedOption: null,
  };
  
  handleChange = selectedOption => {
    this.setState({ selectedOption });
    //console.log(`Option selected:`, selectedOption);
  };

  render() {
    const { selectedOption } = this.state;
 
    return (
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options5}
        id="select6"
      /> 
    );
   } 

}
export default Select6;
