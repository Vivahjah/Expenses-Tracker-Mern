import React from "react";
import "boxicons";
import { default as api } from "../redux/apiSlice";


const Lists = () => {
  const { data, isFetching, isError, isSuccess } = api.useGetLabelsQuery();
  console.log(data);
  let Transaction;

  if (isFetching) {
    Transaction = <div>Fetching...</div>;
  }
  if (isError) {
    Transaction = <div>Error...</div>;
  }
  if (isSuccess) {
    Transaction = data.labelDetails.map((value, i) => (
      <Transactions key={i} category={value} />
    ));
  }

  return (
    <div className="flex flex-col py-6 gap-3">
      <h1 className="py-4 font-bold text-xl">History</h1>
      {Transaction}
    </div>
  );
};

export default Lists;

const Transactions = ({ category }) => {
  if (!category) return null;

  return (
    <div
      className="item flex justify-center bg-gray-50 py-2 rounded-r"
      style={{ borderRight: `8px solid ${category.color ?? "#e5e5e5"}` }}
    >
      <button className="px-3">
        <box-icon
          name="trash"
          color={category.color ?? "#e5e5e5"}
          size="15px"
        />
      </button>
      <span className="block w-full">{category.name}</span>
    </div>
  );
};
