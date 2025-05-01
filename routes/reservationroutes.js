const express = require('express')
const Reservationroutes = express.Router()



const reservationController = require("../controller/reservationcontroller.js")


Reservationroutes.get("/reservation" , reservationController.getreservationcontroller )



module.exports = Reservationroutes