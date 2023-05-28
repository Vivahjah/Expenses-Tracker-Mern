const { StatusCodes } = require("http-status-codes");
const { NotFoundError, BadRequestError } = require("../errors");
const Transaction = require("../models/transaction");

const getLabels = async (req, res) => {
  let label = await Transaction.aggregate([
    {
      $lookup: {
        from: "categories",
        localField: "type",
        foreignField: "type",
        as: "categoriesInfo",
      },
    },
    {
      $unwind: "$categoriesInfo",
    },
  ]);

  if (!label) {
    throw new NotFoundError("Lookup collection error");
  }
  let labelDetails =  label.map((v) =>
    Object.assign(
      {},
      {
        id: v._id,
        amount: v.amount,
        name: v.name,
        type: v.type,
        color: v.categoriesInfo.color,
      }
    )
  );
  res.status(StatusCodes.OK).json({ labelDetails });
  
};
module.exports = { getLabels };
