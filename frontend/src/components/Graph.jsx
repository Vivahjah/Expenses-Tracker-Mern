import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
import Labels from "./Labels";
import { chartData, getTotal } from "../Utils/Func";
import { default as api } from "../redux/apiSlice";

Chart.register(ArcElement);


const Graph = () => {
  const { data, isFetching, isError, isSuccess } = api.useGetLabelsQuery();

  let graphData;

  if (isFetching) {
    graphData = <div>Fetching...</div>;
  }
  if (isError) {
    graphData = <div>Error...</div>;
  }
  if (isSuccess) {
    graphData = <Doughnut {...chartData(data.labelDetails)}></Doughnut>;
  }
  return (
    <div className="flex justify-center max-w-xs mx-auto">
      <div className="item">
        <div className="chart relative">
          {graphData}
          <h3 className="mb-4 font-bold title">
            Total
            <span className="block text-3xl text-emerald-400">${getTotal(data.labelDetails)}</span>
          </h3>
        </div>
        <div className="flex flex-col py-10 gap-4">
          <Labels />
        </div>
      </div>
    </div>
  );
};

export default Graph;
