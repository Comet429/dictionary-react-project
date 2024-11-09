import React from "react";

export default function Phonetic(props) {
  if (props) {
    return (
      <div className="Phonetic">
        <p>{props.phonetic}</p>
        <p className="phonetic">{props.phonetic.text}</p>
      </div>
    );
  } else {
    return null;
  }
}
