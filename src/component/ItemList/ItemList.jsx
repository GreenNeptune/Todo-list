import React, { Component } from 'react';
import Collapsible from 'react-collapsible';
import Scroll from '../Scroll/Scroll';
import Item from '../Item/Item';
import './itemList.css';
export default class ItemList extends Component {
    constructor() {
        super();

    }

    render() {
        return (
            <div>
                <Collapsible open={true}>
                    <Scroll>
                        <ul className="list-group">
                            {this.props.itemList.map((obj, index) =>
                                <Item
                                    item={obj}
                                    key={index}
                                    onCheckBoxClick={this.props.onCheckBoxClick}
                                />
                            )}
                        </ul>
                    </Scroll>
                </Collapsible>
            </div>
        );
    }
}


