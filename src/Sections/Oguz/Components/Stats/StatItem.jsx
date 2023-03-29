import React from "react";
import "./StatItem.scss";
const StatItem = ({ title, value, className }) => {
  return (
    <div className={`stat-item ${className}`}>
      <p>{title}</p>
      <p>{value}</p>
    </div>
  );
};

export default StatItem;
