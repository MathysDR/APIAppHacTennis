const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://192.168.1.26:3000"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Serveur API pour l'application HAC Tennis." });
});

require("./app/routes/members.routes.js")(app);

// set port, listen for requests
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});