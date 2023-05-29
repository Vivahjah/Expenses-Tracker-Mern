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
    let categories = await Category.find({});
    //with Object.assign, we can get specific fields from an object 
    let filteredCategories = await categories.map(v => Object.assign({}, {type : v.type, color : v.color}))
    res.status(StatusCodes.OK).json({ filteredCategories });
 
   };
  
 
   module.exports = {createCategory, getAllCategory}