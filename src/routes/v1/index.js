const express = require('express');
const router = express.Router();
const useRouters = require('./userRoutes');
const customerRouter = require('./customerRoutes');
const productRouter = require('./productRoutes');
const authRouter = require('./authRoutes.js')
router.get('/status', (req, res) => {
    res.send('Use routes');
})

router.use('/users', useRouters);
router.use('/customers', customerRouter);
router.use('/products', productRouter);
router.use('/auth', authRouter);


module.exports = router;