import React from 'react';


const Item = ({ text }) => {
    return (
        <ul className="list-group">
            <li className="list-group-item">
                <input type="checkbox" />
                {text}

            </li>
        </ul>

    );


}

export default Item;