const Joi = require('joi');

const productValidationSchema = Joi.object({
    productName: Joi.string().alphanum().required().messages({
        'any.required' : `"productName" không được bỏ trống !`
    }),
    produce: Joi.string().required().messages({
        'any.required' : `"produce" không được bỏ trống !`
    }),
    yearOfManufacture: Joi.number().min(1).required().messages({
        'any.required' : `"yearOfManufacture" không được bỏ trống !`
    }),
    quantity: Joi.number().min(1).required().messages({
        'any.required' : `"quantity" không được bỏ trống !`
    }),
    price: Joi.number().required().messages({
        'any.required' : `"price" không được bỏ trống !`
    })
});

// Middleware kiểm tra và xác thực dữ liệu
const validateProductData = (req, res, next) => {
    const { error, value } = productValidationSchema.validate(req.body, {abortEarly: false});
    console.log(error)
    if (error) {
    const errorMessages = error.details.map((detail) => detail.message);
    return res.status(400).json({ errors: errorMessages });
    }

    // Dữ liệu hợp lệ, gán lại vào req.body và chuyển đến middleware tiếp theo hoặc xử lý logic
    req.body = value;
    next();
}

module.exports = validateProductData;