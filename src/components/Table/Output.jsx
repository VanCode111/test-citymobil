import React from "react";

function Output({ selectedCar }) {
  return selectedCar ? (
    <div className="output">
      <p className="output__text">{selectedCar}</p>
    </div>
  ) : (
    ""
  );
}

export default Output;
