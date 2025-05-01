const express = require("express");
const foodroutes = require("./routes/foodroutes")
const reservationRoutes = require("./routes/reservationroutes")
const reclamationRoutes = require("./routes/reclamtionroutes.js")
const blogRoutes = require("./routes/blogroutes.js")

const app = express();

const cors = require("cors");

app.use(cors());

app.use(express.json());
app.use("/", foodroutes);
app.use("/" , reservationRoutes) ;
app.use("/" , reclamationRoutes)
app.use("/" , blogRoutes)

app.listen(5500, () => {
  console.log("Server is running on port 5500");
});
