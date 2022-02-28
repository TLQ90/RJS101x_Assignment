
import React, { Component } from 'react';
import './App.css';
import { STAFFS } from './shared/staffs';
import { Card} from "reactstrap";
import Staffs from './components/StaffListComponent';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      staffs: STAFFS
    };
  }

render(){
      return (
        <div dark color="primary" >
      
              <div className='container a' >
                <Card href="/" text-white>ỨNG DỤNG QUẢN LÝ NHÂN SỰ V1.0</Card>
              </div>
   <div className="">
          <Staffs  staffs = {this.state.staffs} />
          </div>
        </div>
      );
    }
   }
export default App;
