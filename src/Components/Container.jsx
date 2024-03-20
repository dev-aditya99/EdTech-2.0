import React from "react";

function Container(props) {
  return (
    <div className={`w-full py-9 px-5 ${props.className}`}>
      {props.children}
    </div>
  );
}

export default Container;
