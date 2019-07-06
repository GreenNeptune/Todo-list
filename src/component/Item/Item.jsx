import React, { Component } from 'react';
import './item.css';

export default class Item extends Component {
    constructor(props) {
        super(props);
        this.handleChangeSign = this.handleChangeSign.bind(this);
        this.marked = this.props.item.marked;
        this.state = {
            text: '',
            marked: this.marked,
            favorite: false,
            date: '',
            delete: false
        }
        this.textMarked = '';
    }
    handleChangeSign() {
        let activity = this.state.marked ? "unDone" : "Done";

        this.setState({
            marked: !this.state.marked
        });
        this.props.handleActivity(activity, this.props.index);
    }
    // componentWillMount() {
    //     console.log('componentWillMount');
    //     console.log(this.props);
    // }
    render() {
        // console.log(this.state.m)
        // const { item } = this.props;
        // this.state.marked ? this.textMarked = 'done-task' : this.textMarked = '';
        return (
            <li className="list-group-item d-flex justify-content-between">
                <div className="d-flex justify-content-between">
                    <input checked={this.state.marked} onChange={this.handleChangeSign} title="mark" type="checkbox" className="space-icon" />
                    <div title="favorite" className="icon favorite space-icon"></div>
                    <div className={`text-style ${this.state.marked ? 'done-task' : ''}`}>
                        {this.props.item.text}
                    </div>
                </div>
                <div>
                    <div title="delete" className="icon trash"></div>
                </div>
            </li >
        );
    }
}

