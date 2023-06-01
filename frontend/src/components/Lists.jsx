import React from "react";

import { default as api } from "../redux/apiSlice";
import { RiDeleteBin6Fill } from "react-icons/ri";

const Lists = () => {
  const { data, isFetching, isError, isSuccess } = api.useGetLabelsQuery();
  const [deleteTransaction] = api.useDeleteTransactionMutation();

  const handleDelete = async (e) => {
    if (!e.target.dataset.id) return;
    try {
      await deleteTransaction({ _id: e.target.dataset.id });
    } catch (error) {
      console.log(error);
    }
  };

  let Transaction;

  if (isFetching) {
    Transaction = <div>Fetching...</div>;
  }
  if (isError) {
    Transaction = <div>Error...</div>;
  }
  if (isSuccess) {
    Transaction = data.labelDetails.map((value, i) => (
      <Transactions handleDelete={handleDelete} key={i} category={value} />
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

const Transactions = ({ category, handleDelete }) => {
  if (!category) return null;

  return (
    <div
      className="item flex justify-center bg-gray-50 py-2 rounded-r"
      style={{ borderRight: `8px solid ${category.color ?? "#e5e5e5"}` }}
    >
      <RiDeleteBin6Fill
        className="mt-2 ml-2 cursor-pointer"
        onClick={handleDelete}
        data-id={category.id ?? ""}
        color={category.color ?? "#e5e5e5"}
      />
      <span className="block w-full">{category.name}</span>
    </div>
  );
};
