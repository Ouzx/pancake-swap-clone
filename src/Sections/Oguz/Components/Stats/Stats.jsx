import React, { useState, useEffect } from "react";
import StatItem from "./StatItem";
import "./Stats.scss";

const _data = {
  firstPart: [
    {
      //   "Circulating Supply": "182,389,848",
      title: "Circulating Supply",
      value: "0",
    },
    {
      //   "Total Supply": "376,868,149",
      title: "Total Supply",
      value: "0",
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
      value: "$0 million",
    },
    {
      //   "Burned to date": "772,943,311",
      title: "Burned to date",
      value: "0",
    },
    {
      //   "Current emissions": "9.9/block",
      title: "Current emissions",
      value: "9.9/block",
    },
  ],
};

const Stats = () => {
  const [data, setStatData] = useState(_data);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newData = {
        firstPart: [...data.firstPart],
        secondPart: [...data.secondPart],
      };

      // Increase circulating supply
      const circulatingSupply = newData.firstPart[0];
      circulatingSupply.value = updateNumber(
        circulatingSupply.value,
        182389848
      );

      // Increase total supply
      const totalSupply = newData.firstPart[1];
      totalSupply.value = updateNumber(totalSupply.value, 376868149);

      // Increase market cap
      const marketCap = newData.secondPart[0];
      marketCap.value = updateCurrency(marketCap.value, 625);

      // Increase burned to date
      const burnedToDate = newData.secondPart[1];
      burnedToDate.value = updateNumber(burnedToDate.value, 772943311);

      setStatData(newData);
    }, 10);

    return () => clearInterval(intervalId);
  }, [data]);

  const updateNumber = (value, targetValue) => {
    const currentValue = parseInt(value.replace(/,/g, ""));
    const increment = Math.ceil((targetValue - currentValue) / 10);
    const newValue = Math.min(currentValue + increment, targetValue);
    return newValue.toLocaleString();
  };

  const updateCurrency = (value, targetValue) => {
    const currentValue = parseInt(value.replace(/\D/g, ""));
    const increment = Math.ceil((targetValue - currentValue) / 100);
    const newValue = Math.min(currentValue + increment, targetValue);
    return value.replace(
      currentValue.toLocaleString(),
      newValue.toLocaleString()
    );
  };

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
