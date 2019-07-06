import React, { Component } from 'react';
import './item.css';

export default class Item extends Component {
    constructor(props) {
        super(props);
        this.handleChangeSign = this.handleChangeSign.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    handleChangeSign() {
        let activity = this.props.item.marked ? "unDone" : "Done";
        this.props.handleActivity(activity, this.props.index);
    }

    deleteItem() {
        this.props.handleActivity("deleteItem", this.props.index);

    }
    render() {
        return (
            <li className="list-group-item d-flex justify-content-between">
                <div className="d-flex justify-content-between">
                    <input checked={this.props.item.marked} onChange={this.handleChangeSign} title="mark" type="checkbox" className="space-icon" />
                    <div title="favorite" className="icon favorite space-icon"></div>
                    <div className={`text-style ${this.props.item.marked ? 'done-task' : ''}`}>
                        {this.props.item.text}
                    </div>
                </div>
                <div>
                    <div onClick={this.deleteItem} title="delete" className="icon trash"></div>
                </div>
            </li >
        );
    }
}

