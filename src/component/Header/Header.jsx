import React, { Component } from 'react';
import "./header.css";
class Header extends Component {
    render() {
        return (
            <div className="row app-header">
                <div className=" d-flex align-items-center col-4 offset-4">
                    <div className="logo"></div>
                    <div className="app-header-title">
                        {this.props.title}
                    </div>
                </div>
            </div>
        )
    };
}

export default Header;