import React from 'react';
import {Dropdown, Form} from 'react-bootstrap';
import Select from 'react-select';
import Component from 'react';

const options4 = [
  { value: 'u1', label: 'U18 rec1' },
  { value: 'u2', label: 'U18 rec2' },
  { value: 'u3', label: 'U18 rec3' },
];

class Select5 extends React.Component {
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
        options={options4}
        id="select5"
      /> 
    );
   } 

}
export default Select5;
