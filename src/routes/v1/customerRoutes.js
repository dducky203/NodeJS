const express = require('express');
const { route } = require('./userRoutes');
const router = express.Router();

//========= GET ===========
router.get('/:id', (req, res) => {
    let id = req.params.id;
    console.log(id);
    res.status(200).json({ msg: `Method Get have ID : ${id} ` })
})


router.get('/', (req, res) => {
    const { page, sort } = req.query;
    console.log(page, sort);
    res.status(200).json({ msg: `Get Page: ${page}   Get Sort: ${sort}` });
});

//========= POST ===========

router.post('/',(req, res) => {
    const {cusName , gender} = req.body;
    console.log(cusName , gender);
    res.status(200).json({
        cusName,
        gender
    });
});

//========= PUT ===========
router.put('/',(req, res) => {
    const {cusName , gender} = req.body;
    console.log(cusName , gender);
    res.status(200).json({
        cusName,
        gender
    });
});

//======== DELETE ==========
router.delete('/:id', (req, res) =>{
    const id = req.params.id;

    console.log(`DELETE SUCCESS: ${id}`);
    res.status(200).json({msg:`DELETE SUCCESS: ${id}`});

});




module.exports = router;
