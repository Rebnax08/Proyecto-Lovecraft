const express = require ('express');
const router = express.Router();
const controller = require('./controller');
const response = require('../response');


router.get ('/', (req,res) => {
controller.getAllDioses()
.then((listadedioses) => response.success(req,res, listadedioses, 200))
.catch ((err) => response.error(req,res, 'Internal Error', 500, err))
});

module.exports = router;