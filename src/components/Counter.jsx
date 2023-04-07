import React from "react";

const Counter = ({ score, cps }) => {
  return (
    <>
      <div className="Counter">
        <p>
          <span>{score} cookies </span>
          <br />
          {cps} cps
        </p>
      </div>
    </>
  );
};

export default Counter;
