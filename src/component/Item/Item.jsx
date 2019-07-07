import React, { Component } from 'react';
import './item.css';

export default class Item extends Component {
    constructor(props) {
        super(props);
        this.handleChangeSign = this.handleChangeSign.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.toggleFavoriteItem = this.toggleFavoriteItem.bind(this);
    }

    handleChangeSign() {
        let activity = this.props.item.marked ? "unDone" : "Done";
        this.props.handleActivity(activity, this.props.index);
    }

    deleteItem() {
        let activity = this.props.item.marked ? "deleteFromToDoneList" : "deleteFromToDoList";
        this.props.handleActivity(activity, this.props.index);
    }
    toggleFavoriteItem() {
        // let activity = this.props.item.marked ? "whenDoneList" : "WhenTodoList";
        this.props.handleActivity("WhenTodoList Favorite", this.props.index);
    }
    render() {
        return (
            <li className="list-group-item d-flex justify-content-between">
                <div className="d-flex justify-content-between">
<<<<<<< HEAD
                    <input checked={this.state.marked} onChange={this.handleChangeSign} title="mark" type="checkbox" className="space-icon" />
                    <div title="favorite" className="icon favorite space-icon"></div>
                    <div className={`text-style ${this.marked ? 'done-task' : ''}`}>
=======
                    <input checked={this.props.item.marked} onChange={this.handleChangeSign} title="mark" type="checkbox" className="space-icon" />
                    <div onClick={this.toggleFavoriteItem} title="favorite" className={`icon space-icon ${this.props.item.favorite ? "selected" : "favorite"}`}></div>
                    {/* ${this.props.favorite ? "selected" : "favorite" */}
                    <div className={`text-style ${this.props.item.marked ? 'done-task' : ''}`}>
>>>>>>> e3301736c36376a7aa79f28e8f73ce31516db715
                        {this.props.item.text}
                    </div>
                </div>
                <div>
                    <div onClick={this.deleteItem} title="delete" className="icon trash"></div>
                </div>
            </li>
        );
    }
}

