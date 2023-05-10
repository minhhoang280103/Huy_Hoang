const express = require("express");
const app = express();
const CONFIG= require("./config");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const home = require("./route/home");

app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use("/", home);

app.listen(CONFIG.PORT, () => {
  console.log(`Example app listening on port ${CONFIG.PORT}`)
  
})
mongoose
  .connect(CONFIG.MONGODB_URL, {
    maxPoolSize: 20,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected MongoDB");
  })
  .catch((err) => {
    console.log(`Connect mongoDb fail: ${err}`);
  });