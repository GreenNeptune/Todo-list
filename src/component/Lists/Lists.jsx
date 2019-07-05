import React, { Component } from 'react';
import './lists.css';
import Item from '../Item/Item';
import Collapsible from 'react-collapsible';

export default class Lists extends Component {
    render() {
        return (
            <div>
                <div className="ToDo">
                    <Collapsible trigger={'Todo List'} >
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

                <div className="Done">
                    <div className="deafault-done-list">Done List</div>

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
                            <div></div>
                        )
                    }
                </div>
            </div>
        )
    }
}

