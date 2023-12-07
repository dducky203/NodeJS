const express = require('express');
const router = express.Router();
const useRouters = require('./userRoutes');
const customerRouter = require('./customerRoutes');
const productRouter = require('./productRoutes');

router.get('/status',(req, res) =>{
    res.send('Use routes');
})

router.use('/users',useRouters);
router.use('/customers',customerRouter);
router.use('/products',productRouter);

module.exports = router;