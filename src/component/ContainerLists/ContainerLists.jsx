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
<<<<<<< HEAD
        }
    }

=======
        }
    }

    deleteItemFromList(activity, index) {
        console.log(activity);
        if (activity === "deleteFromToDoList") {
            // in the to do list
            let tempToDoList = this.state.todoList;
            tempToDoList.splice(index, 1);
            this.setState({
                todoList: [...tempToDoList]
            })
        }
        else if (activity === "deleteFromToDoneList") {
            // in the to Donelistlet item = this.state.todoList[index];
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
            console.log('father');
            console.log(item.favorite);
            if (!item.favorite) {
                item.favorite = true;
                todoList.splice(index, 1);
                this.setState({
                    todoList: [item, ...todoList]
                })
            }
        }
    }

>>>>>>> e3301736c36376a7aa79f28e8f73ce31516db715

    handleActivity(activity, index) {
        if (activity === "Done") {
            this.moveToList("doneList", index);
<<<<<<< HEAD
            console.log("object is checked" + activity);
        }
        else if (activity === "unDone") {
            this.moveToList("toDoList", index);

            console.log("object is unchecked" + activity);
=======
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
>>>>>>> e3301736c36376a7aa79f28e8f73ce31516db715
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