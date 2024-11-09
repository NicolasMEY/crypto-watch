import React, { useState } from "react";
import TableLine from "./TableLine";

const Table = ({ coinsData }) => {
  const [rangeNumber, setRangeNumber] = useState(100);
  const [orderBy, setOrderBye] = useState("");

  const tableHeader = [
    "Prix",
    "Market",
    "Volume",
    "1h",
    "1s",
    "1j",
    "1m",
    "6m",
    "1a",
    "ATH",
  ];
  return (
    <div className="table-container">
      <ul className="table-header">
        <div className="range-container">
          <span>
            Top{" "}
            <input
              type="text"
              value={rangeNumber}
              onChange={(e) => setRangeNumber(e.target.value)}
            />
          </span>
          <input
            type="range"
            min="1"
            max="250"
            value={rangeNumber}
            onChange={(e) => setRangeNumber(e.target.value)}
          />
        </div>
        {/* Logique de triage */}
        {tableHeader.map((el) => (
          <li key={el}>
            <input
              type="radio"
              name="header-el"
              id={el}
              defaultChecked={
                el === orderBy || el === orderBy + "reverse" ? true : false
              }
              onClick={() => {
                if (orderBy === el) {
                  setOrderBye(el + "reverse");
                } else {
                  setOrderBye(el);
                }
              }}
            />
            <label htmlFor={el}>{el}</label>
          </li>
        ))}
      </ul>
      {coinsData &&
        coinsData
          .slice(0, rangeNumber)
          .map((coin, index) => <TableLine coin={coin} index={index} />)}
    </div>
  );
};

export default Table;
