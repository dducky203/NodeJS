const express = require('express');
const userController = require('../../controllers/userController')
const router = express.Router();
const verifyToken = require('../../middlewares/verifyToken');
const Joi = require('joi');
const validateUserData = require('../../middlewares/validateUserData');

 /* 
const userValidationSchema = Joi.object({
  username: Joi.string().alphanum().required().messages({
    'any.required': `"username" không được bỏ trống !`
    //'any.alphanum ': `"username" viet sai`,
  }),
  email: Joi.string().email().required(),
  age: Joi.number().min(18).required(),
  phone: Joi.string().min(10).max(10).required()
});

// Middleware kiểm tra và xác thực dữ liệu
const validateUserData = (req, res, next) => {
    const { error, value } = userValidationSchema.validate(req.body, {abortEarly: false});
    console.log(error)
    if (error) {
    const errorMessages = error.details.map((detail) => detail.message);
      return res.status(400).json({ errors: errorMessages });
    }
  
    // Dữ liệu hợp lệ, gán lại vào req.body và chuyển đến middleware tiếp theo hoặc xử lý logic
    req.body = value;
    next();
};*/






router.get('/',verifyToken, userController.getAll);

/*router.get('/', (req, res) => {
    const { page, sort } = req.query;
    console.log(page, sort);
    res.status(200).json({ msg: 'Get Query String' });
});*/

router.post('/',validateUserData, verifyToken, userController.creat );

router.put('/:id',validateUserData, verifyToken, userController.update);

router.delete('/:id',validateUserData, verifyToken, userController.delete);






module.exports = router;
