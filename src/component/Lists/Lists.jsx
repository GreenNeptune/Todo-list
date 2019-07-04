import React, { Component } from 'react';

import Item from '../Item/Item';

export default class Lists extends Component {
    render() {
        return (
            <div>
                {this.props.toDolist && this.props.toDolist.length > 0 ?
                    (
                        <div>
                            {this.props.toDolist.map((obj, i) =>
                                <Item key={i} text={obj.text} />
                            )}
                        </div>
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

