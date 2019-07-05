import React, { Component } from 'react';
import './lists.css';
import Item from '../Item/Item';
import Collapsible from 'react-collapsible';
import Scroll from '../Scroll/Scroll';

export default class Lists extends Component {
    constructor() {
        super();
        this.onCheckBoxClick = this.onCheckBoxClick.bind(this);
        this.state = {
            marked: false
        }
    }
    onCheckBoxClick(isMarked) {
        this.setState({ marked: isMarked })
    }
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
                        <Collapsible open={true}>
                            <Scroll>
                                {this.props.toDolist && this.props.toDolist.length > 0 ?
                                    (
                                        <ul className="list-group">
                                            {this.props.toDolist.map((obj, index) =>
                                                <Item
                                                    text={obj.text}
                                                    key={index}
                                                    marked={this.state.marked}
                                                    onCheckBoxClick={this.onCheckBoxClick}
                                                />
                                            )}
                                        </ul>
                                    )
                                    :
                                    <div></div>
                                }
                            </Scroll>
                        </Collapsible>
                    </div>
                    <div className="d-flex align-items-center col-1 offset-5">
                        <Collapsible open={true}>
                            <Scroll>
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
                            </Scroll>
                        </Collapsible>

                    </div>
                </div>
            </div>
        )
    }
}

