import React, { Component } from 'react';
import './item.css';

export default class Item extends Component {
    constructor() {
        super();
        this.state = {
            text: '',
            marked: false,
            favorite: false,
            date: '',
            delete: false
        }
        this.textMarked = '';
        this.handleCheckBoxClick = this.handleCheckBoxClick.bind(this);
    }
    componentDidUpdate() {
        if (this.state.marked && this.state.text.length > 0) {
            this.props.onCheckBoxClick(Object.assign({}, this.state))
        }
    }

    handleCheckBoxClick(e) {
        const target = e.target;

        // target.checked ? this.setState({ marked: true }) : this.setState({ marked: false });
        if (target.checked) {
            console.log(this.props.text);
            this.setState({
                text: this.props.text,
                marked: true,
                favorite: false,
                date: '',
                delete: false
            })
        }
        else {
            this.setState({ marked: false })
        }
    }

    render() {
        const { text } = this.props;
        this.state.marked ? this.textMarked = 'done-task' : this.textMarked = '';
        return (
            <li className="list-group-item d-flex justify-content-between">
                <div className="d-flex justify-content-between">
                    <input onChange={this.handleCheckBoxClick} title="mark" type="checkbox" className="space-icon" />
                    <div title="favorite" className="icon favorite space-icon"></div>
                    <div className={`text-style ${this.textMarked}`}>
                        {text}
                    </div>
                </div>
                <div>
                    <div title="delete" className="icon trash"></div>
                </div>
            </li>
        );
    }
}

