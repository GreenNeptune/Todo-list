import React from 'react';
import './item.css';

const Item = ({ text }) => {
    return (
        <ul className="list-group">
            <li className="list-group-item">
                <input type="checkbox" />
                <sapn className="icon"></sapn>
                {text}
            </li>
        </ul>
    );
}

export default Item;