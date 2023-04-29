import questions from "../data";
import SingleQuestion from "./SingleQuestion";

import React from "react";

function ListOfQuestions() {
  return (
    <div className="container">
      <h1>Questions</h1>
      {questions.map((question) => {
        return (
          <div key={question.id}>
            <SingleQuestion {...question} />
          </div>
        );
      })}
    </div>
  );
}

export default ListOfQuestions;
