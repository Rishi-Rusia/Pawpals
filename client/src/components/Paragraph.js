import React from "react";

export default function Paragraph(props) {
  return (
    <div className="paragraph">
      <p>{props.content}</p>
    </div>
  );
}
