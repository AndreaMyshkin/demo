import React from "react";
import './styles/Button.css';

function Button(props) {
  return (
    <div class="wrapper">
      <a className="button__cat"  onClick={props.handleClick}>
       <span>Random {props.name}</span>
      </a>
    </div>
  );
}

export default Button;
