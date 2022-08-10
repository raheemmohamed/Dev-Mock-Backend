const express = require("express");
const cors = require("cors");
const path = require("path");

//All your routes Ex: user route
const userRoutes = require("./routes/users.router");

const app = express();
const PORT = process.env.PORT || 3000;

// CORS origin whitelisting: add your localdev server url with port: Angular default http://localhost:4200
app.use(
  cors({
    origin: "http://localhost:4200",
  })
);

// ExpressJS middleware for check and parse the incomming request string in to JSON in payload
app.use(express.json());

//set View engine - handlebar
app.set("view engine", "hbs");

//use bootstrap
app.use(express.static(path.join(__dirname, "node_modules/bootstrap/dist/")));

// public path for pull assets
app.use(express.static("public"));

// load root welcome
app.get("/", (req, res) => {
  res.status(200).render("welcome", {
    data: {
      portNumber: PORT,
    },
  });
});

/**
 * list below for your own route like below
 */
app.use("/users", userRoutes);

// export to out for use other modules
module.exports = {
  PORT,
  app,
};
