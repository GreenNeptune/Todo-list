import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{ overflowY: 'scroll', overflowX: 'hidden' }}>
            {props.children}
        </div>
    );
};

export default Scroll;