const db = require("../database.js");

///// get reclamation :::
exports.getReclamationmodel = async () => {
    try {
      const [reclamation] = await db.query('SELECT * FROM reclamation');
      return reclamation;
    } catch (err) {
      console.error(err);
      return [];
    }
  };