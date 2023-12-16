const express = require('express');
const router = express.Router();
const customerController  = require('../../controllers/customerController');

//========= GET ===========
router.get('/', customerController.getAllCus);

/* 
router.get('/', (req, res) => {
    const { page, sort } = req.query;
    console.log(page, sort);
    res.status(200).json({ msg: `Get Page: ${page}   Get Sort: ${sort}` });
});*/

//========= POST ===========

router.post('/', customerController.creat);

//========= PUT ===========
router.put('/:id',customerController.update);

//======== DELETE ==========
router.delete('/:id', customerController.delete);




module.exports = router;
