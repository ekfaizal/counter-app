import React from "react";

const States = ({ values }) => {
  return (
    <>
      {values.map((value) => (
        <div className="bg-warning text-center">
          <h1>{value.name}</h1>
          <h2>{value.lang}</h2>
          <h3>{value.pop}</h3>
        </div>
      ))}
    </>
  );
};

export default States;
