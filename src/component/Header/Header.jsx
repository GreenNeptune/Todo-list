import React, { Component } from 'react';
class Header extends Component {
    constructor() {
        super();
        
    }

    render() {
        return (    
            <div className="app-header">
              <div className="app-header-title">{this.props.title}</div> 
              <div className="logo"></div> 
            </div>
        )
    };
}

export default Header;