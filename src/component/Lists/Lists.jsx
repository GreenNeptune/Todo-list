import React, { Component } from 'react';
import './lists.css';
import Item from '../Item/Item';
import Collapsible from 'react-collapsible';

export default class Lists extends Component {
    render() {
        return (
            <div>
                <div className="row border-black margin-top">
                    <div className="col offset-1">
                        <h3 className="deafault-list-header">Todo List</h3>
                    </div>
                </div>

                <div className="row ToDo">
                    <div className="d-flex align-items-center col-9 offset-1">
                        <Collapsible trigger={'Todo List'}>
                            {this.props.toDolist && this.props.toDolist.length > 0 ?
                                (
                                    <ul className="list-group">
                                        {this.props.toDolist.map((obj, index) =>
                                            <Item
                                                text={obj.text}
                                                key={index}
                                            // onCheckBoxClick={this.onCheckBoxClick}
                                            />
                                        )}
                                    </ul>
                                )
                                :
                                <div></div>
                            }
                        </Collapsible>
                    </div>
                </div>

                <div className="row border-black margin-top">
                    <div className="col offset-1">
                        <h3 className="deafault-list-header">Done List</h3>
                    </div>
                </div>
                <div className="row Done">
                    <div className="d-flex align-items-center col-9 offset-1">
                        {this.props.doneList && this.props.doneList.length > 0 ?
                            (
                                <ul>
                                    {this.props.doneList.map((obj, index) =>
                                        <li key={index}>{`task: ${obj.text}`}</li>
                                    )}
                                </ul>
                            )
                            :
                            ""

                        }
                    </div>
                </div>
            </div>
        )
    }
}

