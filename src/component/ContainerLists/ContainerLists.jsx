import React, { Component } from 'react';
import AddItem from '../AddItem/AddItem';
import Lists from '../Lists/Lists';
class ContainerLists extends Component {
    constructor() {
        super();
        this.addInput = this.addInput.bind(this);
        this.addToDoneList = this.addToDoneList.bind(this);
        this.state = {
                todoList: [],
                doneList: []
        }
    }
    addInput(item) {
        console.log(item);
        this.setState({
            lists: {
                todoList: [...this.state.todoList, item],
                doneList: [...this.state.doneList]
            }
        })
    }
    addToDoneList(itemDone) {
        console.log(itemDone);

        this.setState({
            lists: {
                todoList: [...this.state.todoList],
                doneList: [...this.state.doneList, itemDone]
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
                    toDolist={this.state.todoList}
                    doneList={this.state.doneList}
                    addToDoneList={this.addToDoneList}
                />
            </div>
        )
    };
}

export default ContainerLists;