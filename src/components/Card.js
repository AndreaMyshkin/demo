import React, { Fragment } from "react";
import './styles/Card.css';

function Card(props) {
  return (
    <Fragment>
      <div
        class="card"
        style={{
          width: "20rem",
          height: "26rem",
          border: `10px solid ${props.style}`
        }}
      >
        {props.randomCat
          ? props.randomCat.map(cat => (
              <img src={cat.url} class="card-img-top" alt="cat" />
            ))
          : null}

        <div class="card-body">
          <h5 class="card-text"> {props.title}</h5>
        </div>
      </div>
    </Fragment>
  );
}

export default Card;
