const router = require('express').Router();
const  {getLabels} = require("../controllers/labels")


router.get(getLabels)


module.exports = router
