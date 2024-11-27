import React from "react";
import "./PieChart.css";
import { ResponsivePie } from "@nivo/pie";

const PieChart = ({ hasData }) => {
  if (!hasData) {
    return (
      <div className="circlechart-container no-data">
        <p className="no-data-text">Pie Chart</p>
      </div>
    );
  }

  const data = [
    {
      id: "긍정",
      label: "긍정",
      value: 45,
      color: "#316dec",
    },
    {
      id: "중립",
      label: "중립",
      value: 30,
      color: "#0f9b0f",
    },
    {
      id: "부정",
      label: "부정",
      value: 25,
      color: "#e93434",
    },
  ];

  return (
    <div className="circlechart-container">
      <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.2]],
        }}
        colors={{ datum: "data.color" }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: "color",
          modifiers: [["darker", 2]],
        }}
        legends={[
          {
            anchor: "bottom",
            direction: "row",
            justify: false,
            translateX: 0,
            translateY: 40,
            itemsSpacing: 0,
            itemWidth: 100,
            itemHeight: 18,
            itemTextColor: "#999",
            itemDirection: "top-to-bottom",
            itemOpacity: 1,
            symbolSize: 18,
            symbolShape: "circle",
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: "#000",
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
};

export default PieChart;
