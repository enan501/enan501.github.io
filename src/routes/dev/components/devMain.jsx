import React, { Component } from 'react';
import {Link} from 'react-scroll'
import '../devMain.css'
import mainBackground from '../../../images/main_bg.png'
class DevMain extends Component {
  render() {
    return (
      <div className="main">
        <div className="main-filter"></div>
        <div className="main-container">
          <h1>DEV_ENAN</h1>
          <h4>Always develop what I liken, and what people need.</h4>
          <p>This is a simple portfolio practice, and I'm upgrading frequently.</p>
          <Link to="profile" smooth={true}>
            <div className="btn_wrapper">
              <button>Read more</button>
            </div>
          </Link>
          </div>
      </div>
    );
  }
}

export default DevMain;
