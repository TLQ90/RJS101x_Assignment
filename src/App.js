import { render } from '@testing-library/react';
import React, { Component } from 'react';
import './App.css';
import { STAFFS } from './shared/staffs';
import { Navbar, NavbarBrand } from "reactstrap";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

render() {
  return (
    <div>
    <Navbar dark color="primary">
      <div className='container-fluid'>
        <NavbarBrand href='/'>Ứng dụng quản lý nhân sự V1.0</NavbarBrand>
      </div>
    

    </Navbar>
    </div>
  )
}

}
export default App;
