import React, { Component } from 'react';
import AddItem from '../AddItem/AddItem';
import Lists from '../Lists/Lists';
class ContainerLists extends Component {
    constructor() {
        super();
        this.addInput = this.addInput.bind(this);
        // this.handleOnChange = this.handleOnChange.bind(this);
        this.state = {
            todoList: [],
            doneList: []
        }
    }


    handleChecked(status) {
        if (status === true) {
            this.handleOnChange()
        }
        this.state.AddDoneList()
    }


    addInput(item) {
        this.setState({
            todoList: [...this.state.todoList, item]
        })
    }
<<<<<<< HEAD
    
    addToDoneList(itemDone) {
        debugger
        console.log("itemDone");
        console.log(itemDone);
        this.setState({
            doneList: [...this.state.doneList, itemDone]
        })
    }
    
=======
    // handleOnChange(itemDone) {
    //     console.log(itemDone);
    //     this.setState({
    //         doneList: [...this.state.doneList, itemDone]
    //     })
    // }

    //     icon: handleOnChange{
    //     ("Done")
    // }
    //     Itme: activity = ""
    //     this.props.handleOnChange{ (activity) => { this.handleOnChange(activity)}}

    //     handleOnChange(activity) { 
    //         if(activity === "delete")
    //             if (activity === "add")
    //         if (remove) {

    //         }
    //     }
>>>>>>> 5c581cd87321b52224cf914db908048f7a71a5d4

    render() {
        return (
            <div>
                <AddItem
                    addInput={this.addInput}
                />
                <Lists
                    toDolist={this.state.todoList}
                    doneList={this.state.doneList}
<<<<<<< HEAD
                    
=======
                    handleOnChange={this.handleOnChange}
>>>>>>> 5c581cd87321b52224cf914db908048f7a71a5d4
                />
            </div>
        )
    };
}

export default ContainerLists;