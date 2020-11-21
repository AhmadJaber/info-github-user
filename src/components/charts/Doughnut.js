import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

function DoughnutChart({ data }) {
  const chartConfigs = {
    type: "doughnut2d", // The chart type
    width: "100%", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        caption: "Stars Per Language",
        captionFontColor: "#fab73a",
        captionFontSize: "16px",
        captionFont: "Open Sans",
        decimals: 0,
        showPercentValues: 0,
        doughnutRadius: "60%",
        theme: "fusion",
        showShadow: 0,
        showPlotBorder: 0,
        useDataPlotColorForLabels: 1,
        enableSmartLabels: 0,
        canvasBgColor: "#282A2E",
        plotBorderalpha: "1",
        showlegend: "0",
        toolTipBgcolor: "#484E69",
        toolTipColor: "#F8F8F8",
        toolTipBorderColor: "#525357",
        tooltipBorderAlpha: "30",
        showToolTipShadow: "1",
        toolTipPadding: "7",
        toolTipBorderRadius: "3",
        startingAngle: "180",
        bgcolor: "#282A2E",
        centerLabel: "$label<br>$value",
        centerLabelBold: "1",
        centerLabelFontSize: "16",
        centerLabelColor: "#d2d2d2",
        enableRotation: "0",
        showHoverEffect: 0,
        plotHoverEffect: 0,
        plotToolText: "<div>$label, $dataValue ($percentValue)<div>",
      },
      // Chart Data
      data,
    },
  };

  return <ReactFC {...chartConfigs} />;
}

export default DoughnutChart;
