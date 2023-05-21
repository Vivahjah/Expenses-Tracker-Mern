const { StatusCodes } = require("http-status-codes");
const { NotFoundError, BadRequestError } = require("../errors");


const Category = require("../models/category")


const createCategory = async (req, res) => {
   const {type, color} = req.body
   if (!type || !color) {
       throw new BadRequestError("Fill in all fields")
   }
   const category = await Category.create({type , color})
   res.status(StatusCodes.CREATED).json({ category });

  };

const getAllCategory = async (req, res) => {
   let category = await Category.find({})
   res.status(StatusCodes.OK).json({ category });

  };
 

  module.exports = {createCategory, getAllCategory}