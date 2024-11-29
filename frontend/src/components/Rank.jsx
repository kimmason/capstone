import React from "react";
import "./Rank.css";

const Rank = () => {
  return (
    <div className="rank-container">
      <ul className="rank-list">
        <li className="rank-word">1위: 키워드1</li>
        <li className="rank-word">2위: 키워드2</li>
        <li className="rank-word">3위: 키워드3</li>
      </ul>
    </div>
  );
};

export default Rank;
