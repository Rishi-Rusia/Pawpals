import React from "react";
import { Link } from "react-router-dom";

export default function Card(props) {
  return (
    <div className="card">
      <img
        // src="https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"

        src={props.image}
        alt=""
      />
      <h3>{props.title}</h3>
      <p>
        {props.para}
        <button>
          {" "}
          <Link to="/adopt">Contact</Link>{" "}
        </button>
      </p>
    </div>
  );
}
