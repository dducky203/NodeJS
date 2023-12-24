const Joi = require('joi');

const userValidationSchema = Joi.object({
    username: Joi.string().alphanum().required().messages({
      'any.required' : `"username" không được bỏ trống !`
    }),
    email : Joi.string().email().required().messages({
      'any.required': `"email" không được bỏ trống !`
    }),
    phone: Joi.string().min(10).max(10).required().messages({
      'any.required': `"phone" không được bỏ trống !`
    }),
    age: Joi.number().min(18).required().messages({
      'any.required': `"age" không được bỏ trống !`
    })
   
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
}

module.exports = validateUserData;