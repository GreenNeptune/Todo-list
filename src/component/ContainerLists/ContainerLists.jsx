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
            todoList: [...this.state.todoList, item]
        })
    }
    addToDoneList(itemDone) {
        console.log(itemDone);
        // this.setState({
        //     doneList: [...this.state.doneList, itemDone]
        // })
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