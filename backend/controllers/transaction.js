const { StatusCodes } = require("http-status-codes");
const { NotFoundError, BadRequestError } = require("../errors");
const Transaction = require("../models/transaction")



const createTransaction = async (req, res) => {
    const {type, name, amount} = req.body
    if (!type || !name || !amount) {
        throw new BadRequestError("Fill in all fields")
    }
    let transaction  = await Transaction.create({type, name, amount})
    res.status(StatusCodes.CREATED).json({ transaction });
  }

  const getAllTransaction = async (req, res) => {
    
    let transactions = await Transaction.find({})
    res.status(StatusCodes.OK).json({ transactions });
 
   };

   const deleteTransaction = async (req, res) => {
    if(!req.body){
      throw new BadRequestError(`No tranaction with id ${req.body}`);
    }
    const transaction = await Transaction.findByIdAndDelete(req.body);
 
    res.status(StatusCodes.OK).json({ transaction });
  };



  module.exports = {createTransaction, getAllTransaction, deleteTransaction}