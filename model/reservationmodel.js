
const db = require("../database.js");

///// get reservation :::
exports.getReservationmodel = async () => {
    try {
      const [reservation] = await db.query('SELECT * FROM reservation');
      return reservation;
    } catch (err) {
      console.error(err);
      return [];
    }
  };