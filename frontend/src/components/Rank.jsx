import React from "react";
import "./Rank.css";

const Rank = () => {
  return (
    <div className="rank-container">
      <h3>키워드 순위</h3>
      <ul className="rank-list">
        <li className="rank-word">키워드 1</li>
        <li className="rank-word">키워드 2</li>
        <li className="rank-word">키워드 3</li>
        <li className="rank-word">키워드 4</li>
        <li className="rank-word">키워드 5</li>
      </ul>
    </div>
  );
};

export default Rank;
