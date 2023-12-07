const express = require('express');
const router = express.Router();
/*
router.get('/:id',(req, res) =>{
    let id = req.params.id;
    console.log(id);
    res.status(200).json({msg: `Get Id : ${id}`});
})
*/
router.get('/', (req, res) => {
    const { page, sort } = req.query;
    console.log(page, sort);
    res.status(200).json({ msg: 'Get Query String' });
});

router.post('/', (req, res) => {
    const { username, password } = req.body;
    console.log(username, password);
    res.status(200).json({
        username,
        password
    });
});

router.put('/', (req, res) => {
    const { username, password ,id} = req.body;

    console.log(username, password ,id);
    res.status(200).json({
        username,
        password,
        id
    });
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    res.status(200).json({id});
});






module.exports = router;
