import React, { Component } from 'react';
import AddItem from '../AddItem/AddItem';
import Lists from '../Lists/Lists';
class ContainerLists extends Component {
    constructor() {
        super();
        this.addInput = this.addInput.bind(this);
        this.state = {
            lists: {
                todoList: [],
                doneList: []
            }
        }
    }
    addInput(item) {
        this.setState({
            lists: {
                todoList: [...this.state.lists.todoList, item],
                doneList: [...this.state.lists.doneList]
            }
        })
    }
    render() {
        return (
            <div>
                <AddItem
                    addInput={this.addInput}
                />
                <Lists
                    toDolist={this.state.lists.todoList}
                />
            </div>
        )
    };
}

export default ContainerLists;