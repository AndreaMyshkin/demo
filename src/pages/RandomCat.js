import React, { Fragment } from "react";
import Button from "../components/Button";
import Card from "../components/Card";

export default function RandomCat(props) {
  return (
    <Fragment>
      <Button handleClick={props.handleClick} name={"cat"} />
      <div className="card__container">
        <Card
          randomCat={props.randomCat}
          style={props.style.black}
          title={"I'am the cat one"}
        />
      </div>
    </Fragment>
  );
}
