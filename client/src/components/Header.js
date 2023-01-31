import React from "react";
import faceDoggo from "../images/FaceDoggo.jpg";

export default function Hello() {
  return (
    <div className="header">
      <img className="header-background" src={faceDoggo} alt="" />
      <div className="header-hero">
        <b>
          A second <br /> chance <br /> for a lifetime <br /> of love
        </b>
        <hr />
        <p>
          Bring home a loving new friend, <br /> Adopt your dog
          <button>Now </button>
        </p>
      </div>
    </div>
  );
}
