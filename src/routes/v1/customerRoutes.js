const express = require('express');
const { route } = require('./userRoutes');
const router = express.Router();
const customerController  = require('../../controllers/customerController');

//========= GET ===========
router.get('/:id', customerController.get);

/* 
router.get('/', (req, res) => {
    const { page, sort } = req.query;
    console.log(page, sort);
    res.status(200).json({ msg: `Get Page: ${page}   Get Sort: ${sort}` });
});*/

//========= POST ===========

router.post('/', customerController.creat);

//========= PUT ===========
router.put('/',customerController.update);

//======== DELETE ==========
router.delete('/:id', customerController.delete);




module.exports = router;
