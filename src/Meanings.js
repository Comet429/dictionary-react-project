import React from "react";

export default function Meanings(props) {
  console.log(props.meanings);
  return (
    <div className="Meanings">
      <h3>{props.word.meanings.partOfSpeech}</h3>
      {props.meanings.definition.map(function (definition, index) {
        return (
          <div key={index}>
            <p className="definition">{props.meanings.definition}</p>
            <p className="example">{props.meanings.example}</p>
          </div>
        );
      })}
    </div>
  );
}
