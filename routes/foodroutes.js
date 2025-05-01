const express = require('express')
const foodroutes = express.Router()

const homecontroller = require('../controller/homecontroller.js')

foodroutes.get('/home',homecontroller.getfoodcontroller)
foodroutes.post('/add',homecontroller.addfoodcontroller)
foodroutes.get('/search/:name',homecontroller.searchfoodcontroller)
// foodroutes.get('/searchbyid/:id',homecontroller.searchbyidcontroller)
foodroutes.patch('/update/:id',homecontroller.updatefoodcontroller)
foodroutes.delete('/delete/:id',homecontroller.deletefoodcontroller)
foodroutes.get('/category/:category',homecontroller.categoryfoodcontroller)


module.exports = foodroutes
