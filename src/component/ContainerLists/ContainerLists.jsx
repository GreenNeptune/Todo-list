import React, { Component } from 'react';
import AddItem from '../AddItem/AddItem';
import Lists from '../Lists/Lists';

class ContainerLists extends Component {
    constructor() {
        super();
        this.addInput = this.addInput.bind(this);
        this.handleActivity = this.handleActivity.bind(this);
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
        let doneList = this.state.doneList;
        doneList.splice(index, 1);
        this.setState({
            doneList: [...doneList],
            todoList: [...this.state.todoList, item]
        })
    }


    addToDoneList(index) {
        let item = this.state.todoList[index];
        item.marked = true;
        let tempToDoList = this.state.todoList;
        tempToDoList.splice(index, 1);
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


    deleteItemFromList(activity, index) {
        if (activity === "deleteFromToDoList") {
            let tempToDoList = this.state.todoList;
            tempToDoList.splice(index, 1);
            this.setState({
                todoList: [...tempToDoList]
            })
        }
        else if (activity === "deleteFromToDoneList") {
            let tempDoneList = this.state.doneList;
            tempDoneList.splice(index, 1);
            this.setState({
                doneList: [...tempDoneList]
            })
        }
    }


    handleFavoriteItem(activity, index) {
        if (activity === "WhenTodoList Favorite") {
            let todoList = this.state.todoList;
            let item = this.state.todoList[index];
            if (!item.favorite) {
                item.favorite = true;
                todoList.splice(index, 1);
                this.setState({
                    todoList: [item, ...todoList]
                })
            }
        }
    }



    handleActivity(activity, index) {
        if (activity === "Done") {
            this.moveToList("doneList", index);
        }
        else if (activity === "unDone") {
            this.moveToList("toDoList", index);
        }
        else if (activity === "deleteFromToDoList") {
            this.deleteItemFromList(activity, index);
        } else if (activity === "deleteFromToDoneList") {
            this.deleteItemFromList(activity, index);
        } else if (activity === "WhenTodoList Favorite") {
            this.handleFavoriteItem(activity, index);
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