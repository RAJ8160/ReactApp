const mongoose = require('mongoose');
const { singupValidation, loginValidation } = require('../MiddleWars/AuthValidation');
const { singup,login} = require('../Controllers/AuthControl');

const router = require('express').Router();

// router.post('/login',(req,res)=>{
//     res.send('login success');
// })
router.post('/singup',singupValidation,singup)
router.post('/login',loginValidation,login)

module.exports = router;