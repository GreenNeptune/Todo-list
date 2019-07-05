import React from "react";

const Scroll = props => {
  return (
    <div style={{ overflowY: "auto", overflowX: "hidden" }}>
      {props.children}
    </div>
  );
};

export default Scroll;
