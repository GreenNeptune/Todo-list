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
                    <input
                        type="checkbox"
                        title="mark"
                        onChange={this.handleChangeSign}
                        checked={this.props.item.marked}
                        className="space-icon"
                    />
                    <div
                        onClick={this.toggleFavoriteItem}
                        title="favorite"
                        className={`icon space-icon ${this.props.item.favorite ? "selected" : "favorite"}`}>
                    </div>
                    <div className={`text-style ${this.props.item.marked ? 'done-task' : ''}`}>
                        {this.props.item.text}
                    </div>
                </div>
                <div>
                    <div
                        onClick={this.deleteItem}
                        title="delete"
                        className="icon trash">
                    </div>
                </div>
            </li>
        );
    }
}

