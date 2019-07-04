import React, { Component } from 'react'
export default class Lists extends Component {
    render() {
        return (
            <div>
                {this.props.toDolist && this.props.toDolist.length > 0 ?
                    (
                        <ul>
                            {this.props.toDolist.map((obj, index) =>
                                <li key={index}>{`task: ${obj.text}`}</li>
                            )}
                        </ul>
                    )
                    :
                    (
                        <div>No activitis yet.</div>
                    )
                }
            </div>
        )
    }
}

