const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");

app.use(bodyParser.json());

// Import routes
const buildingsRoute = require("./routes/buildings");

app.use(cors());
app.use("/", buildingsRoute);

// Routes
app.get("/", (req, res) => {
   res.send("Hello world!");
});

app.get("/posts", (req, res) => {
   res.send("Hello postssss!");
});

// Connect to db
mongoose
   .connect(process.env.DB_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
   })
   .then((res) => console.log("connected to DB"))
   .catch((err) => console.log(err));

app.listen(3000);
