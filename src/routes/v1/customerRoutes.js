const express = require('express');
const router = express.Router();
const customerController  = require('../../controllers/customerController');
const validateCustomerData = require('../../middlewares/validateCustomerData');
const verifyToken = require('../../middlewares/verifyToken');


//========= GET ===========
router.get('/', verifyToken,customerController.getAllCus);

/* 
router.get('/', (req, res) => {
    const { page, sort } = req.query;
    console.log(page, sort);
    res.status(200).json({ msg: `Get Page: ${page}   Get Sort: ${sort}` });
});*/

//========= POST ===========

router.post('/',validateCustomerData, verifyToken, customerController.creat);

//========= PUT ===========
router.put('/:id',validateCustomerData, verifyToken,customerController.update);

//======== DELETE ==========
router.delete('/:id', validateCustomerData, verifyToken,customerController.delete);




module.exports = router;
