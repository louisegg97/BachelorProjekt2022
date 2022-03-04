import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Footer.css"


export class Footer extends Component {
    static displayName = Footer.name;
  
      render()
      {
        return (
            <div className="outerDiv">
            <secText>Footer</secText>
          </div>

        )
    }
}
export default Footer;