import React from "react";
import StatItem from "./StatItem";
import "./Stats.scss";

const data = {
  firstPart: [
    {
      //   "Circulating Supply": "182,389,848",
      title: "Circulating Supply",
      value: "182,389,848",
    },
    {
      //   "Total Supply": "376,868,149",
      title: "Total Supply",
      value: "376,868,149",
    },
    {
      //   "Max Supply": "750,000,000",
      title: "Max Supply",
      value: "750,000,000",
    },
  ],
  secondPart: [
    {
      //   "Market Cap": "$650 million",
      title: "Market Cap",
      value: "$650 million",
    },
    {
      //   "Burned to date": "772,943,311",
      title: "Burned to date",
      value: "772,943,311",
    },
    {
      //   "Current emissions": "9.9/block",
      title: "Current emissions",
      value: "9.9/block",
    },
  ],
};

const Stats = () => {
  return (
    <div className="stats">
      <div className="stats--row">
        {data.firstPart.map((item, index) => {
          return (
            <StatItem
              className="stat-item--first"
              key={index + "statsItem"}
              title={item.title}
              value={item.value}
            />
          );
        })}
      </div>

      <div className="stats--row">
        {data.secondPart.map((item, index) => {
          return (
            <StatItem
              className="stat-item--second"
              key={index + "statsItem"}
              title={item.title}
              value={item.value}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Stats;
