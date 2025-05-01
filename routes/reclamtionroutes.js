const express = require("express");

const Reclamationroutes = express.Router();

const reclamationController = require("../controller/reclamationcontroller.js");

Reclamationroutes.get(
  "/reclamations",
  reclamationController.getreclamationscontroller
);

module.exports = Reclamationroutes;
