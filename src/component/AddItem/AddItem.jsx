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
    handleSubmit(e) {
        if (this.state.text.length > 0) {
            this.setState({
                text: ''
            });
            this.props.addInput(Object.assign({}, this.state));
        }
    }
    render() {
        return (
            <div className="row container-add-item">
                <div className="col-6 offset-2">
                    <div>
                        <input
                            placeholder="Add an item ..."
                            className="add-item-input"
                            type="text" maxLength="65"
                            value={this.state.text}
                            onChange={this.handleChange}
                        />
                    </div>
                </div>
                <div className="col-2">
                    <div className="add-item-logo-container"
                        onClick={this.handleSubmit}
                    >
                        <div className="add-item-logo"></div>
                    </div>

                </div>
            </div>
        )
    };
}
export default AddItem;