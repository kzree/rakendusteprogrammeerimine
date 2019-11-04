const express = require('express');
const router = express.Router();
const User = require("./user.model.js");
const userController = require("./user.controller.js");
const { check, validationResult } = require('express-validator');

const validationMiddleware = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(422).json({errors: errors.array()});
    }
    next();
};

router.post("/signin", userController.signin);
//Create user
router.post("/signup", 
[
    check("email").isEmail().normalizeEmail(),
    check("password").isLength( {min:8}).withMessage("Password length has to be atleast 8 characters")
],
validationMiddleware,
userController.signup
);

module.exports = router;