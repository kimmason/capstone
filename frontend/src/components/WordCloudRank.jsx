import React from "react";
import WordCloud from "./WordCloud";
import Rank from "./Rank";
import "./WordCloudRank.css";

const WordCloudRank = ({ hasData }) => {
  return (
    <div className="wordcloud-rank-wrapper">
      <div className="wordcloud-content">
        <h2 className="wordcloud-title">워드클라우드</h2>
        <WordCloud title="긍정" hasData={hasData} size="large" />
      </div>
      <div className="rank-content">
        <Rank />
      </div>
    </div>
  );
};

export default WordCloudRank;
