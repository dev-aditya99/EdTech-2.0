import React from "react";

function ThemeBtns(props) {
  return (
    <button className={`py-3 px-5 font-bold rounded-md ${props.className}`}>
      {props.children}
    </button>
  );
}

export default ThemeBtns;
