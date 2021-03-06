import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

function PieChart({ data }) {
  const chartConfigs = {
    type: "pie2d", // The chart type
    width: "100%", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    containerBackgroundOpacity: "0",
    dataSource: {
      // Chart Configuration
      chart: {
        caption: "Used Languages",
        captionFontColor: "#fab73a",
        captionFontSize: "16px",
        captionFont: "Open Sans",
        showShadow: 0,
        showPlotBorder: 0,
        showPercentValues: 1,
        decimals: 0,
        useDataPlotColorForLabels: 1,
        enableSmartLabels: 0,
        theme: "fusion",
        bgcolor: "#282A2E",
        pieRadius: "45%",
        canvasBgColor: "#282A2E",
        plotBorderalpha: "0",
        showlegend: "0",
        toolTipBgcolor: "#484E69",
        toolTipColor: "#F8F8F8",
        toolTipBorderColor: "#525357",
        tooltipBorderAlpha: "30",
        showToolTipShadow: "1",
        toolTipPadding: "7",
        toolTipBorderRadius: "3",
        startingAngle: "90",
        enableRotation: "0",
      },
      // Chart Data
      data,
    },
  };

  return <ReactFC {...chartConfigs} />;
}

export default PieChart;
