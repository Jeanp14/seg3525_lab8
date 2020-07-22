import React from 'react';
import {Dropdown, Form} from 'react-bootstrap';
import Select from 'react-select';
import Component from 'react';

const options3 = [
  { value: 'mr', label: 'Mens regional' },
  { value: 'm1', label: 'Mens tier1' },
  { value: 'm2', label: 'Mens tier2' },
  { value: 'm3', label: 'Mens tier3' },
  { value: 'wr', label: 'Womens regional' },
  { value: 'w1', label: 'Womens tier1' },
];

class Select4 extends React.Component {
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
        options={options3}
        id="select4"
      /> 
    );
   } 

}
export default Select4;
