import React from "react";
import {useForm} from "react-hook-form"
import Lists from "./Lists";
import { default as api } from "../redux/apiSlice";

const Forms = () => {
  const [addTransaction] = api.useAddTransactionMutation()
    const {register, handleSubmit, resetField} = useForm();

    const onSubmit = async (data) => {
      if(!data) return;
      try {
        
        await addTransaction(data).unwrap()
        resetField('name')
        resetField('amount')
        console.log(data);
         
      } catch (error) {
        alert(error.data.msg)
        
      }
       
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
            <option value="Investment" defaultValue>Investments</option>
            <option value="Expenses">Expenses</option>
            <option value="Savings">Savings</option>
          </select>
          <div className="input-group">
            <input type="text" {...register('amount')} placeholder="Amount" className="form-input" />
          </div>
          <div className="submit-btn">
            <button className="border py-2 text-white bg-indigo-500 w-full">make Transaction</button>
          </div>
        </div>
      </form>
      <Lists />
    </div>
  );
};

export default Forms;
