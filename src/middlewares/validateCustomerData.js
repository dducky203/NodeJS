const Joi = require('joi');

const customerValidationSchema = Joi.object({
    fullName: Joi.string().alphanum().required().messages({
        'any.required' : `"productName" không được bỏ trống !`
    }),
    phone: Joi.string().min(10).max(10).required().messages({
        'any.required': `"phone" không được bỏ trống !`
    }),
    email : Joi.string().email().required().messages({
        'any.required': `"email" không được bỏ trống !`
    }),
    address: Joi.string().required().messages({
        'any.required' : `"address" không được bỏ trống !`
    }),
    birthday: Joi.number().required().messages({
        'any.required' : `"birthday" không được bỏ trống !`
    }),
    gender: Joi.string().required().messages({
        'any.required' : `"gender" không được bỏ trống !`
    })
});

// Middleware kiểm tra và xác thực dữ liệu
const validateCustomerData = (req, res, next) => {
    const { error, value } = customerValidationSchema.validate(req.body, {abortEarly: false});
    console.log(error)
    if (error) {
    const errorMessages = error.details.map((detail) => detail.message);
    return res.status(400).json({ errors: errorMessages });
    }

    // Dữ liệu hợp lệ, gán lại vào req.body và chuyển đến middleware tiếp theo hoặc xử lý logic
    req.body = value;
    next();
}

module.exports = validateCustomerData;