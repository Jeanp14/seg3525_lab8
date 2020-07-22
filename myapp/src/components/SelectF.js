import React from 'react';
import {Dropdown, Form} from 'react-bootstrap';
import Select from 'react-select';
import Component from 'react';

const fields = [
  { value: 'f1', label: 'Outdoor' },
  { value: 'f2', label: 'Outdoor(artificial)' },
  { value: 'f3', label: 'Indoor' },
];

class SelectF extends React.Component {
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
        options={fields}
        id="selectf"
      /> 
    );
   } 

}
export default SelectF;
