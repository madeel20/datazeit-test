import React, { useEffect } from "react";
import { Chart } from "@antv/g2";

const ranges = [
  [0, 499],
  [500, 999],
  [1000, 1499],
  [1500, 2000],
];

const MyChart = ({ products }) => {
  useEffect(() => {
    document.getElementById("pizza-chart-container").innerHTML = "";
    let data = [...products];
    data.forEach((obj) => {
      obj.type = "1";
      obj.priceTag = getRangeTag(obj.price);
    });
    data = data.sort((a, b) => b.priceTag - a.priceTag);
    const chart = new Chart({
      container: "pizza-chart-container",
      autoFit: true,
      height: 400,
      padding: [40, 100, 0, 80],
    });
    chart.data(data);
    chart.scale("type", {
      range: [0, 1],
    });
    chart.coordinate("polar");
    chart.legend(false);
    chart.axis("priceTag", {
      grid: {
        alignTick: false,
        line: {
          style: {
            lineDash: [0, 0],
          },
        },
      },
    });
    chart
      .point()
      .adjust("jitter")
      .position("priceTag*type")
      .color("priceTag")
      .shape("circle")
      .style({
        fillOpacity: 0.85,
      });

    chart.render();
  }, [products]);

  const getRangeTag = (price) => {
    const range = ranges.find((r) => r[0] <= price && r[1] >= price);
    return range ? range[0] + "-" + range[1] : "";
  };

  return <div id="pizza-chart-container" />;
};

export default MyChart;
