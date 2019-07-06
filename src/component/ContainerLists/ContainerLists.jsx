import React, { Component } from 'react';
import AddItem from '../AddItem/AddItem';
import Lists from '../Lists/Lists';

class ContainerLists extends Component {
    constructor() {
        super();
        this.addInput = this.addInput.bind(this);
        this.handleActivity = this.handleActivity.bind(this);
        // this.moveToList = this.moveToList.bind(this);
        // this.addToDoList = this.addToDoList.bind(this);
        // this.addToDoneList = this.addToDoList.bind(this);
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

    addToDoList(index) {
        let item = this.state.doneList[index];

        item.marked = false;
        let doneList = [];
        for (let i = 0; i < this.state.doneList.length; i++) {
            if (i !== index) {
                doneList.push(this.state.doneList[i]);
            }
        }


        this.setState({
            doneList: [...doneList],
            todoList: [...this.state.todoList, item]
        })
    }

    addToDoneList(index) {
        let item = this.state.todoList[index];
        console.log("item ");
        console.log(item);
        item.marked = true;
        let tempToDoList = this.state.todoList;

        tempToDoList.splice(index, 1);
        // console.log("list : ")

        this.setState({
            doneList: [...this.state.doneList, item],
            todoList: [...tempToDoList]
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
        }
        else if (activity === "unDone") {
            this.moveToList("toDoList", index);

        }
    }

    render() {
        console.log('render contanierList todoList: ');
        console.log(this.state.todoList);
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