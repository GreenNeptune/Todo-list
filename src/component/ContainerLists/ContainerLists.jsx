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

    addToDoneList(index) {
        let item = this.state.todoList[index];
        console.log("item " + item);
        item.marked = true;

        let tempToDoList = this.state.todoList;

        tempToDoList.splice(index, 1);
        debugger
        this.setState({
            doneList: [...this.state.doneList, item],
            todoList: [...tempToDoList]
        })
    }


    addToDoList(index) {
        let item = this.state.todoList[index];
        item.marked = false;
        let doneList = this.state.doneList;
        doneList.splice(index, 1);
        this.setState({
            doneList: [...doneList],
            todoList: [...this.state.todoList, item]
        })
    }


    moveToList(listType, index) {
        if (listType === "doneList") {
            this.addToDoneList(index);
        } else if (listType === "toDoList") {
            this.addToDoList(index);
        }
    }


    handleActivity(activity, index) {
        if (activity === "Done") {
            this.moveToList("doneList", index);
            console.log("object is checked" + activity);
        }
        else if (activity === "unDone") {
            this.moveToList("toDoList", index);

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