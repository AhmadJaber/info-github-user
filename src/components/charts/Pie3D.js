import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

function Pie3D({ data }) {
  const chartConfigs = {
    type: "pie3d", // The chart type
    width: "100%", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        caption: "Languages",
        theme: "fusion",
        showPercentValues: 1,
        decimals: 1,
        useDataPlotColorForLabels: 1,
        pieRadius: "45%",
        enableSmartLabels: 0,
      },
      // Chart Data
      data,
    },
  };

  return <ReactFC {...chartConfigs} />;
}

export default Pie3D;
