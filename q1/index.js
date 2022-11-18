const express = require("express");
const app = express();
app.get("/:age", (req, res) => {
  let name = req.query.name;
  let age = req.params.age;
  if (!name) {
    name = "person";
  }
  res.send(`Welcome ${name} and your age is  ${age}`);
});
app.listen(3000);
// url be like localhost:3000/29?name = Nirajan
// http://localhost:3000/67?name=Nirajan
