const express = require("express");
// const parser = require("body-parser");
// const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("index");
});
app.post("/result", (req, res, next) => {
  const obj = JSON.parse(JSON.stringify(req.body));
  console.log(obj);
  res.send(`<h1>${obj.fullName} is ${obj.age} years old.`);
});

app.listen(3000);
