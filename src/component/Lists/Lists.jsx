import React, { Component } from 'react';
import './lists.css';
import ItemList from '../ItemList/ItemList';

export default class Lists extends Component {
    render() {
        return (
            <div>
                <div className="row border-black margin-top background-green">
                    <div className=" d-flex col-2 offset-1">
                        <h3 className="deafault-list-header">Todo List</h3>
                    </div>
                    <div className=" d-flex col-2 offset-4">
                        <h3 className="deafault-list-header">Done List</h3>
                    </div>
                </div>
                <div className="row ToDo">
                    <div className="d-flex align-items-center col-1">
                        <ItemList
                            itemList={this.props.toDolist}
                            handleActivity={this.props.handleActivity}
                        />
                    </div>
                    <div className="d-flex align-items-center col-1 offset-5">
                        <ItemList
                            itemList={this.props.doneList}
                            handleActivity={this.props.handleActivity}
                        />
                    </div>
                </div>
            </div>
        )
    }
}
