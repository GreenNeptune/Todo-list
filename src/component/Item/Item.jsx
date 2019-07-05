import React from 'react';
import './item.css';

const Item = ({ text }) => {
    return (
        <li className="list-group-item">
            <div className="d-flex">
                <input title="mark" type="checkbox" className="space-icon" />
                <div title="favorite" className="icon favorite space-icon"></div>
            </div>
            <div className="d-flex">
                {text}
                <div title="delete" className="icon trash"></div>
            </div>
        </li>
    );
}

export default Item;