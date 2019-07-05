import React from 'react';
import './item.css';

const Item = ({ text }) => {
    return (
        <li className="list-group-item">
            <input type="checkbox" />
            <div className="icon favorite"></div>
            <div className="icon trash"></div>
            {text}
        </li>
    );
} 

export default Item;