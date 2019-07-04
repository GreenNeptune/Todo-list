import React, { Component } from 'react';
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
            <div>
                <input type="text" onChange={this.handleChange} />
                <button onClick={this.handleSubmit}>Add task</button>
            </div>
        )
    };
}

export default AddItem;