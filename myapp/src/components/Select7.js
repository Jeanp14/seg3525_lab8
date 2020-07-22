import React from 'react';
import {Dropdown, Form} from 'react-bootstrap';
import Select from 'react-select';
import Component from 'react';

const options6 = [
  { value: '9', label: '9' }, { value: '10', label: '10' }, { value: '11', label: '11' },
  { value: '12', label: '12' }, { value: '13', label: '13' }, { value: '14', label: '14' },
  { value: '15', label: '15' }, { value: '16', label: '16' }, { value: '17', label: '17' },
  { value: '18', label: '18' },
];

class Select7 extends React.Component {
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
        options={options6}
        id="select7"
      >Age</Select> 
    );
   } 

}
export default Select7;
