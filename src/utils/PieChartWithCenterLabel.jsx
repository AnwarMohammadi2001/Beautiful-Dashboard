import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { useDrawingArea } from "@mui/x-charts/hooks";
import { styled } from "@mui/material/styles";

const data = [
  { value: 5, label: "Mobile" },
  { value: 10, label: "Tablet" },
  { value: 15, label: "Mobile" },
];

const size = {
  width: 200,
  height: 200,
};

const StyledText = styled("text")(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: "middle",
  dominantBaseline: "central",
  fontSize: 20,
}));

// Styled tspans
const TitleTspan = styled("tspan")(({ theme }) => ({
  fontSize: 24,
  fontWeight: "bold",
  fill: theme.palette.text.primary,
}));

const SubtitleTspan = styled("tspan")(({ theme }) => ({
  fontSize: 16,
  fill: "#666",
}));

function PieCenterLabel({ children }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}

export default function PieChartWithCenterLabel() {
  return (
    <PieChart
      series={[
        {
          data,
          innerRadius: 70,
          label: {
            visible: true,
            style: {
              fill: "#4A90E2", // blue text color
              fontSize: 14,
              fontWeight: "600",
            },
          },
        },
      ]}
      {...size}
    >
      <PieCenterLabel>
        <>
          <TitleTspan x="50%" dy="-0.5em">
            12,340
          </TitleTspan>
          <SubtitleTspan x="50%" dy="1.2em">
            Total
          </SubtitleTspan>
        </>
      </PieCenterLabel>
    </PieChart>
  );
}
