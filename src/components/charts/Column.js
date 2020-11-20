import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

function ColumnChart({ data }) {
  const chartConfigs = {
    type: "column2d", // The chart type
    width: "100%", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        caption: "Most Popular Repo",
        theme: "fusion",
        yAxisName: "Stars",
        xAxisName: "Repos",
        yAxisNameFontSize: "16px",
        xAxisNameFontSize: "16px",
        captionFontColor: "#fab73a",
        captionFontSize: "16px",
        captionFont: "Open Sans",
        bgcolor: "#282A2E",
        canvasBgColor: "#282A2E",
        paletteColors: "#6957DA",
        toolTipBgcolor: "#484E69",
        toolTipColor: "#F8F8F8",
        toolTipBorderColor: "#525357",
        tooltipBorderAlpha: "30",
        showToolTipShadow: "1",
        toolTipPadding: "7",
        toolTipBorderRadius: "3",
        plotSpacePercent: "60",
        formatNumberScale: "1",
        showdivlineValues: "0",
        drawCrossLine: "1",
        crossLineColor: "#575961",
        crossLineAlpha: "15",
        showLimits: "0",
        showValues: "1",
        divlineAlpha: "0",
        baseFontSize: "12",
        labelFontColor: "#d2d2d2",
        valueFontColor: "#81809C",
        plotToolText: "$label </br><b>Stars :</b> $datavalue",
      },
      // Chart Data
      data,
    },
  };

  return <ReactFC {...chartConfigs} />;
}

export default ColumnChart;
