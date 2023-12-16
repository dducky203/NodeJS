const express = require('express');
const userController = require('../../controllers/userController')
const router = express.Router();

router.get('/', userController.getAll);

/*router.get('/', (req, res) => {
    const { page, sort } = req.query;
    console.log(page, sort);
    res.status(200).json({ msg: 'Get Query String' });
});*/

router.post('/', userController.creat );

router.put('/:id', userController.update);

router.delete('/:id', userController.delete);






module.exports = router;
