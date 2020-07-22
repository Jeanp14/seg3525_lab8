import React from 'react';
import {Dropdown, Form} from 'react-bootstrap';
import Select from 'react-select';
import Component from 'react';

const options2 = [
  { value: 'br', label: 'Boys regional' },
  { value: 'b1', label: 'Boys tier1' },
  { value: 'b2', label: 'Boys tier2' },
  { value: 'b3', label: 'Boys tier3' },
  { value: 'gr', label: 'Girls regional' },
  { value: 'g1', label: 'Girls tier1' },
  { value: 'g2', label: 'Girls tier2' },
  { value: 'g3', label: 'Girls tier3' },
];
 
class Select3 extends React.Component {
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
        options={options2}
        id="select3"
      /> 
    );
   } 

}
export default Select3;
