const router = require('express').Router();
const  {createCategory, getAllCategory} = require("../controllers/category")


router.route('/').post(createCategory).get(getAllCategory)


module.exports = router
