const {check} = require('express-validator');

module.exports = [
    check('title')
    .isLength({min:3})
    .withMessage('El texto debe contener al menos 3 caracteres'),

]