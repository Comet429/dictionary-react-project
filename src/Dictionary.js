import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data.word);
  }

  function search(event) {
    event.preventDefault();

    // documentation: https://api.dictionaryapi.dev
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=097df1873e259e4a0bt116o07b264c78`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChange} />
      </form>
    </div>
  );
}
