import React from "react";
import faceDoggo from "../images/FaceDoggo.jpg";
import { Link } from "react-router-dom";

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
          <button>
            <Link to="/adopt">Now</Link>
          </button>
        </p>
      </div>
    </div>
  );
}
