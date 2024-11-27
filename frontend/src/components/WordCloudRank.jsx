// WordCloudRank.jsx
import React from "react";
import WordCloud from "./WordCloud";
import Rank from "./Rank";
import "./WordCloudRank.css";

const WordCloudRank = ({ hasData }) => {
  return (
    <div className="wordcloud-rank-wrapper">
      <div className="wordcloud-item">
        <h3 className="wordcloud-title-p">긍정</h3>
        <WordCloud title="긍정" hasData={hasData} size="large" />
        <Rank />
      </div>
      <div className="wordcloud-item">
        <h3 className="wordcloud-title-N">중립</h3>
        <WordCloud title="중립" hasData={hasData} size="large" />
        <Rank />
      </div>
      <div className="wordcloud-item">
        <h3 className="wordcloud-title-n">부정</h3>
        <WordCloud title="부정" hasData={hasData} size="large" />
        <Rank />
      </div>
    </div>
  );
};

export default WordCloudRank;
