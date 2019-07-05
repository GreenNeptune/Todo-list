import React, { Component } from 'react';
import './item.css';

export default class Item extends Component {
    constructor() {
        super();
        this.state = {
            marked: false
        }
        this.textMarked = '';
        this.handleCheckBoxClick = this.handleCheckBoxClick.bind(this);
    }
    handleCheckBoxClick(e) {
        const target = e.target;
        target.checked ? this.setState({ marked: true }) : this.setState({ marked: false });
    }
    render() {
        this.state.marked ? this.textMarked = 'done-task' : this.textMarked = '';
        const { text, onCheckBoxClick } = this.props;
        return (
            <li className="list-group-item">
                <div className="d-flex">
                    <input onChange={this.handleCheckBoxClick} title="mark" type="checkbox" className="space-icon" />
                    <div title="favorite" className="icon favorite space-icon"></div>
                </div>
                <div className="d-flex">
                    <div className={`text-style ${this.textMarked}`}>
                        {text}
                    </div>
                    <div title="delete" className="icon trash"></div>
                </div>
            </li>
        );
    }
}

