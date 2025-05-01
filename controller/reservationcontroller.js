const reservationmodel = require("../model/reservationmodel.js")

/// get list of food controller :
exports.getreservationcontroller = (req, res) => {
 reservationmodel.getReservationmodel().then((list) => {
    res.send(list);
  });
};