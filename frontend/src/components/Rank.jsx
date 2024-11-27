import React from "react";
import "./Rank.css";

const Rank = () => {
  return (
    <div className="rank-container">
      <h3>키워드 순위</h3>
      <ol className="rank-list">
        <li>키워드 1</li>
        <li>키워드 2</li>
        <li>키워드 3</li>
        <li>키워드 4</li>
        <li>키워드 5</li>
      </ol>
    </div>
  );
};

export default Rank;
