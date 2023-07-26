const express=require('express')
const {signup} = require('./controllers/userController')
const Route=express.Router()
route.post('/signup',signup).then(console.log('succes post'))
module.exports=Route