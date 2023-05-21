const { StatusCodes } = require("http-status-codes");
const { NotFoundError, BadRequestError } = require("../errors");
const Transaction = require("../models/transaction")


const getLabels = async (req, res) => {
   let label = await Transaction.aggregate([
        {
            $lookup : {
                from : "categories",
                localField : "type",
                foreignField : "type",
                as : "categoriesInfo"
            }
        },
        {
            $unwind : "$categoriesInfo"
        }
    ])
    if (!label){
        throw new NotFoundError("Lookup collection error")
    }
    res.status(StatusCodes.CREATED).json({ category });


}
module.exports = {getLabels}