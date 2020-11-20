import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

function BarChart({ data }) {
  const chartConfigs = {
    type: "bar2d", // The chart type
    width: "100%", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        theme: "fusion",
        caption: "Most Forked Repos",
        captionFontColor: "#fab73a",
        captionFontSize: "16px",
        captionFont: "Open Sans",
        bgcolor: "#282A2E",
        canvasBgColor: "#282A2E",
        yAxisName: "Repos",
        xAxisName: "Forks",
        yAxisNameFontSize: "16px",
        xAxisNameFontSize: "16px",
        toolTipBgcolor: "#484E69",
        toolTipColor: "#F8F8F8",
        toolTipBorderColor: "#525357",
        tooltipBorderAlpha: "30",
        showToolTipShadow: "1",
        toolTipPadding: "7",
        toolTipBorderRadius: "3",
        paletteColors: "#C79E24",
        divlineAlpha: "0",
        labelFontColor: "#d2d2d2",
        showDivLineValues: "0",
        showValues: "1",
        valueFontColor: "#b4b4b6",
        plotSpacePercent: "60",
        axisLineAlpha: "80",
        showYAxisValues: "1",
        yaxislinecolor: "#434456",
        showYAxisLine: "1",
        showdivlineValues: "1",
        baseFontSize: "12",
        plotToolText: "$label </br><b>Forks :</b> $datavalue",
      },
      // Chart Data
      data,
    },
  };

  return <ReactFC {...chartConfigs} />;
}

export default BarChart;
