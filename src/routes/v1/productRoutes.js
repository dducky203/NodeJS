const express = require('express');
const router = express.Router();
const productController = require('../../controllers/productController');

//========= GET ===========
router.get('/:id', productController.get);

/* 
router.get('/',(req, res)=>{
    const {page , name} = req.query;
    console.log(page , name);
    res.status(200).json({msg:`Page : ${page}  Name: ${name}` });
})*/

//========= POST ===========
router.post('/', productController.creat);

//========= PUT ===========
router.put('/', productController.update);

//======== DELETE ==========
router.delete('/:id', productController.delete);


module.exports = router;