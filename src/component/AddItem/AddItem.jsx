import React, { Component } from 'react';
import "./addItem.css"
class AddItem extends Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            text: '',
            marked: false,
            favorite: false,
            date: '',
            delete: false
        }
    }
    handleChange(e) {

        let inputVal = e.target.value;
        this.setState({ text: inputVal })
    }
    handleSubmit() {
        this.props.addInput(Object.assign({}, this.state));
    }
    render() {
        return (
            <div className="row add-item">
                <div className="d-flex align-items-center col-8 offset-2">
                    <div>
                        <input className="add-item-input" type="text" onChange={this.handleChange} />
                    </div>
                    <div className="add-item-logo-container" onClick={this.handleSubmit}>
                        <div className="add-item-logo"></div>
                    </div>
                </div>

            </div>
        )
    };
}

export default AddItem;