import React from "react";
import {useForm} from "react-hook-form"

const Forms = () => {
    const {register, handleSubmit, resetField} = useForm();

    const onSubmit = (data) => {
       
        console.log(data);
    }
  return (
    <div className="form max-w-sm mx-auto w-96">
      <h1 className="font-bold pb-4 text-xl">Transaction</h1>
      <form id="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-4">
          <div className="input-group">
            <input type="text" {...register('name')} placeholder="Salary, House Rent, SIP" className="form-input" />
          </div>
          <select className="form-input" {...register('type')} >
            <option value="investment" defaultValue>Investments</option>
            <option value="expenses">Expenses</option>
            <option value="savings">Savings</option>
          </select>
          <div className="input-group">
            <input type="text" {...register('amount')} placeholder="Salary, House Rent, SIP" className="form-input" />
          </div>
          <div className="submit-btn">
            <button className="border py-2 text-white bg-indigo-500 w-full">make Transaction</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Forms;
