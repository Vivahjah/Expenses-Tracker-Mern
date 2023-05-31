import React from "react";
import { default as api } from "../redux/apiSlice";
import { getLabels } from "../Utils/Func";



const Labels = () => {
  const { data, isFetching, isError, isSuccess } = api.useGetLabelsQuery();
  

  let Transaction;

  if (isFetching) {
    Transaction = <div>Fetching...</div>;
  }
  if (isError) {
    Transaction = <div>Error...</div>;
  }
  if (isSuccess) {
    getLabels(data.labelDetails, 'type')
    Transaction =   getLabels(data.labelDetails, 'type').map((value, index) => (
      <LabelComponent data={value} key={index} />
    ));
  }
  return (
    <>
      {Transaction}
      
    </>
  );
};

export default Labels;

const LabelComponent = ({ data }) => {
  if (!data) {
    return <></>;
  }
  return (
    <div className="labels flex justify-between">
      <div className="flex gap-2">
        <div
          className="w-2 h-2 rounded py-3"
          style={{ background: data.color ?? "" }}
        ></div>
        <h3 className="text-md">{data.type ?? ""}</h3>
      </div>
      <h3 className="font-bold">{Math.round(data.percent ) ?? 0}%</h3>
    </div>
  );
};
