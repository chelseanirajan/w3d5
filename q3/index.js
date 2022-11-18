const express = require("express");
const app = express();
const path = require("path");

const date = new Date();
const hour = date.getHours() - 10;
let cssIden = "";
if (hour < 6 && hour > 18) {
  cssIden = "day.css";
} else {
  console.log(hour);
  cssIden = "night.css";
}

app.use("/css", express.static(path.join(__dirname, "css", cssIden)));

app.get("/", (req, res) => {
  console.log(path.join(__dirname, "css", cssIden));
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.listen(3000);
