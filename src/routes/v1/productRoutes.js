const express = require('express');
const router = express.Router();
const productController = require('../../controllers/productController');
const validateProductData = require('../../middlewares/validateProductData');
const verifyToken = require('../../middlewares/verifyToken');

//========= GET ===========


/* 
router.get('/',(req, res)=>{
    const {page , name} = req.query;
    console.log(page , name);
    res.status(200).json({msg:`Page : ${page}  Name: ${name}` });
})*/

router.get('/', productController.getAllProducts);

//========= POST ===========
router.post('/',validateProductData,verifyToken, productController.creat);

//========= PUT ===========
router.put('/:id', productController.update);

//======== DELETE ==========
router.delete('/:id', productController.delete);


module.exports = router;