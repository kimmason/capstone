import React, { useState } from "react";
import "./SideMenu.css";

const SideMenu = () => {
  const [activeButton, setActiveButton] = useState(null); // 활성화된 버튼 상태 관리

  const handleButtonClick = (buttonIndex) => {
    setActiveButton(buttonIndex);
  };

  return (
    <div className="side-menu">
      <button
        className={`menu-button ${activeButton === 0 ? "active" : ""}`}
        onClick={() => handleButtonClick(0)}
      >
        워드
      </button>
      <button
        className={`menu-button ${activeButton === 1 ? "active" : ""}`}
        onClick={() => handleButtonClick(1)}
      >
        차트
      </button>
      <button
        className={`menu-button ${activeButton === 2 ? "active" : ""}`}
        onClick={() => handleButtonClick(2)}
      >
        댓글
      </button>
    </div>
  );
};

export default SideMenu;
