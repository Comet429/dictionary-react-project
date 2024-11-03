import React from "react";

export default function Meanings(props) {
  return (
    <div className="Meanings">
      <h3>{props.meanings.partOfSpeech}</h3>
      <div>
        <p className="definition">{props.meanings.definition}</p>
        <p className="example">{props.meanings.example}</p>
      </div>
    </div>
  );
}
