import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

function SingleQuestion({ id, title, info }) {
  const [seeInfo, SetSeeInfo] = useState(false);
  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
        <button
          className="question-btn"
          onClick={() => {
            SetSeeInfo(!seeInfo);
          }}
        >
          {seeInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
          {/* {seeInfo ? "-" : "+"} */}
        </button>
      </header>
      <p>{seeInfo && info}</p>
    </article>
  );
}

export default SingleQuestion;
