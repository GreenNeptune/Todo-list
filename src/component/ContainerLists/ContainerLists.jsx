import React, { Component } from 'react';
import AddItem from '../AddItem/AddItem';
import Lists from '../Lists/Lists';
class ContainerLists extends Component {
    constructor() {
        super();
        this.addInput = this.addInput.bind(this);
        this.handleActivity = this.handleActivity.bind(this);
        this.moveToList = this.moveToList.bind(this);
        this.state = {
            todoList: [],
            doneList: []
        }
    }

    addInput(item) {
        this.setState({
            todoList: [...this.state.todoList, item]
        })
    }

    moveToList(listType, index) {
        if (listType === "Done") {
            let item = this.state.todoList[index];
            item.marked = true;
            console.log(item);
            this.setState({
                doneList: [...this.state.doneList, item]
            })
        }
    }
    handleActivity(activity, index) {
        if (activity === "Done") {
            this.moveToList("Done", index);
            console.log("object is checked" + activity);
        }
        else if (activity === "unDone") {
            console.log("object is unchecked" + activity);
        }

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
                    handleActivity={this.handleActivity}
                />
            </div>
        )
    };
}

export default ContainerLists;