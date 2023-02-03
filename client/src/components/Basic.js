import React from "react";

export default function Basic(props) {
  return (
    <div className="basic-hero">
      <div>
        <img src={props.image} alt="" />
        <h1 className="basic-hero-title">{props.title}</h1>
      </div>
    </div>
  );
}
