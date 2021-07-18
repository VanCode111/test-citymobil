import React, { useState } from "react";

function Filter({ applyFilter }) {
  const [filter, setFilter] = useState("");
  return (
    <div className="filter">
      <div className="filter__input-block">
        <input
          placeholder="Поиск"
          className="filter__input"
          id="text"
          onChange={(e) => {
            setFilter(e.target.value);
          }}
          value={filter}
          type="text"
        />
      </div>

      <button className="filter__button" onClick={() => applyFilter(filter)}>
        Найти
      </button>
    </div>
  );
}

export default Filter;
