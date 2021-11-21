require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const app = express();
const config = require("config");
const router = require("./router/index");
const expressUpload = require("express-fileupload");
const path = require("path");
const PORT = process.env.PORT || config.get("serverPort");

app.use(express.static(path.resolve(__dirname, "static")));
app.use(expressUpload());
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use("/api", router);

const start = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    app.listen(PORT, () => {
      console.log("server has been started " + PORT);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
