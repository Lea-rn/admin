const express = require('express')
const blogroutes = express.Router() 

const blogcontroller = require("../controller/blogcontroller")

blogroutes.post("/addblogs",blogcontroller.addblogcontroller)


module.exports = blogroutes ; 