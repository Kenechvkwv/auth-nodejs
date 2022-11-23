const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

//Connect DataBase
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () =>
  console.log("connected to DB")
);
// Import Routes
const authRoute = require("./routes/auth");

//Routes Middlewares
app.use("/api/user", authRoute);

// To start up the server on a prompt, which can be customized later

app.listen(3000, () => console.log("server up and running"));
