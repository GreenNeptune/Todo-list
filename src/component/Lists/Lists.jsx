import React, { Component } from 'react';
import './lists.css';
import Item from '../Item/Item';

export default class Lists extends Component {
    render() {
        return (
            <div>
                <div className="ToDo">
                    {this.props.toDolist && this.props.toDolist.length > 0 ?
                        (
                            <ul className="list-group">
                                {this.props.toDolist.map((obj, index) =>
                                    <Item text={obj.text} key={index} />
                                )}
                            </ul>
                        )
                        :
                        <div className="deafault-todo-list">Todo List</div>
                    }
                </div>
                <div className="Done">
                    {this.props.doneList && this.props.doneList.length > 0 ?
                        (
                            <ul>
                                {this.props.doneList.map((obj, index) =>
                                    <li key={index}>{`task: ${obj.text}`}</li>
                                )}
                            </ul>
                        )
                        :
                        (
                            <div className="deafault-done-list">Done List</div>
                        )
                    }
                </div>
            </div>
        )
    }
}

