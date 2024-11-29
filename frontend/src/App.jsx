import React, { useState } from "react";
import Header from "./components/Header";
import SideMenu from "./components/SideMenu";
import DefaultImage from "./components/images/default-img.png";
import WordCloudRank from "./components/WordCloudRank";
import PieChart from "./components/PieChart";
import LineGraph from "./components/LineGraph";
import Comments from "./components/Comments";
import "./App.css";

function App() {
  const [lineGraphData, setLineGraphData] = useState([]);
  const [selectedEmotion, setSelectedEmotion] = useState("긍정");
  const [hasData, setHasData] = useState(false);
  const [activeButton, setActiveButton] = useState(null);

  const handleSearch = (startDate, endDate) => {
    setHasData(true);
    setActiveButton(0);

    const positive = [10, 20, 15, 25];
    const neutral = [15, 10, 20, 30];
    const negative = [5, 10, 5, 10];

    const start = startDate ? new Date(startDate) : new Date("2023-01-01");
    const end = endDate ? new Date(endDate) : new Date("2023-04-01");
    const interval = Math.floor((end - start) / 3);

    const period = Array.from({ length: 4 }, (_, i) => {
      const date = new Date(start.getTime() + interval * i);
      return date.toISOString().split("T")[0];
    });

    const data = [
      {
        id: "긍정",
        color: "#0000FF",
        data: period.map((p, index) => ({ x: p, y: positive[index] })),
      },
      {
        id: "중립",
        color: "#008000",
        data: period.map((p, index) => ({ x: p, y: neutral[index] })),
      },
      {
        id: "부정",
        color: "#FF0000",
        data: period.map((p, index) => ({ x: p, y: negative[index] })),
      },
    ];

    setLineGraphData(data);
  };

  return (
    <div className="App">
      <Header
        onSearch={(startDate, endDate) => handleSearch(startDate, endDate)}
      />
      <SideMenu activeButton={activeButton} setActiveButton={setActiveButton} />
      {!hasData ? (
        <div className="default-view">
          <img src={DefaultImage} alt="Default" className="default-img" />
          <p className="default-text">데이터가 없습니다.</p>
        </div>
      ) : (
        <div className="grid-container">
          <div className="wordcloud-rank">
            <WordCloudRank
              selectedEmotion={selectedEmotion}
              setSelectedEmotion={setSelectedEmotion}
              hasData={hasData}
            />
          </div>
          <div className="pie-chart">
            <PieChart hasData={hasData} />
          </div>
          <div className="line-graph">
            <LineGraph data={lineGraphData} />
          </div>
          <div className="comments-container">
            <h3>Comments Container</h3>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
