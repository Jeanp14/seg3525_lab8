import React from 'react';
import {Dropdown, Form} from 'react-bootstrap';
import Select from 'react-select';
import {render} from 'react-dom';
import Component from 'react';
import Select3 from './Select3';
import Select4 from './Select4';
import Select5 from './Select5';
import Select6 from './Select6';
import Select7 from './Select7';


const options = [
  { value: 'uc', label: 'U18s comp' },
  { value: 'ur', label: 'U18s rec' },
  { value: 'ac', label: 'Adults comp' },
  { value: 'ar', label: 'Adults rec' },
  { value: 's', label: 'Seniors' },
];
 
class Select2 extends React.Component {
  constructor(){
    super()
    this.state = {
      selectedOption: null,
      show1:false,
      show2:false,
      show3:false,
      show4:false,
      show5:false  
    }
  }
  
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    if(selectedOption.value==='uc'){
      this.setState({
        show1:true,
        show2:false,
        show3:false,
        show4:false,
        show5:true
      })
    }else if(selectedOption.value==='ac'){
      this.setState({
        show1:false,
        show2:true,
        show3:false,
        show4:false,
        show5:false
      })
    }else if(selectedOption.value==='ur'){
      this.setState({
        show1:false,
        show2:false,
        show3:true,
        show4:false,
        show5:true
      })
    }else if(selectedOption.value==='ar'){
      this.setState({
        show1:false,
        show2:false,
        show3:false,
        show4:true,
        show5:false
      })
    } else if(selectedOption.value==='s'){
      this.setState({
        show1:false,
        show2:false,
        show3:false,
        show4:false,
        show5:false
      })
    } 
 
  };

  render() {
    const { selectedOption } = this.state;
 
    return (
      <div>
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
        id="select2"
      />
      <br></br>
      {
        this.state.show1 &&  
        (<div>
          <label>Division:</label>
          <Select3/>
        </div>)
      }
      {
        this.state.show2 &&
        (<div>
          <label>Division:</label>
          <Select4/>
        </div>)
      }
      {
        this.state.show3 &&
        (<div>
          <label>Division:</label>
          <Select5/>
        </div>)
      }
      {
        this.state.show4 &&
        (<div>
          <label>Division:</label>
          <Select6/> 
        </div>) 
      }
      {
        this.state.show5 &&
        (<div>
          <br/>
          <label for="age">Age:</label>
          <Select7/>
        </div>)
      }
      
      </div>
    );
  }
}

export default Select2;