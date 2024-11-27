import React, { useState } from "react";
import Header from "./components/Header";
import SideMenu from "./components/SideMenu";
import DefaultImage from "./components/images/default-img.png";
import WordCloudRank from "./components/WordCloudRank";
import "./App.css";

function App() {
  const [lineGraphData, setLineGraphData] = useState([]);
  const [selectedEmotion, setSelectedEmotion] = useState("긍정");
  const [hasData, setHasData] = useState(false); // 버튼 클릭 여부
  const [activeButton, setActiveButton] = useState(null); // 활성화된 SideMenu 버튼 상태

  const handleSearch = (startDate, endDate) => {
    setHasData(true); // 버튼 클릭 시 데이터 시각화 가능
    setActiveButton(0); // '전체 분석결과' 버튼 활성화

    // 더미데이터
    const positive = [10, 20, 15, 25];
    const neutral = [15, 10, 20, 30];
    const negative = [5, 10, 5, 10];

    // 기본 시작일 및 종료일
    const start = startDate ? new Date(startDate) : new Date("2023-01-01");
    const end = endDate ? new Date(endDate) : new Date("2023-04-01");
    const interval = Math.floor((end - start) / 3);

    const period = Array.from({ length: 4 }, (_, i) => {
      const date = new Date(start.getTime() + interval * i);
      return date.toISOString().split("T")[0]; // YYYY-MM-DD 형식으로 변환
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
      ) : activeButton === 0 || activeButton === null ? (
        <WordCloudRank
          selectedEmotion={selectedEmotion}
          setSelectedEmotion={setSelectedEmotion}
          hasData={hasData}
        />
      ) : null}
    </div>
  );
}

export default App;
