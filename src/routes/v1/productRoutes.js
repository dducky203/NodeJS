const express = require('express');
const { route } = require('./userRoutes');
const router = express.Router();

//========= GET ===========
router.get('/:id',(req, res) =>{
    let id = req.params.id;
    console.log(id);
    res.status(200).json({msg:`Method Get from product have id: ${id} `})
})

router.get('/',(req, res)=>{
    const {page , name} = req.query;
    console.log(page , name);
    res.status(200).json({msg:`Page : ${page}  Name: ${name}` });
})

//========= POST ===========
router.post('/', (req, res) => {
    const { productName, quantity } = req.body;
    console.log(productName, quantity);
    res.status(200).json({
        productName,
        quantity
    });
});

//========= PUT ===========
router.put('/',(req, res) => {
    const { productName, quantity } = req.body;
    console.log(productName, quantity);
    res.status(200).json({
        productName,
        quantity
    });
});

//======== DELETE ==========
router.delete('/:id', (req, res) =>{
    const id = req.params.id;

    console.log(`DELETE SUCCESS PRODUCT HAVE ID: ${id}`);
    res.status(200).json({msg:`DELETE SUCCESS PRODUCT HAVE ID: ${id}`});

})


module.exports = router;