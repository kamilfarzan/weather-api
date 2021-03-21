require("dotenv").config();

const key = process.env.API_KEY;
const express = require("express");
const app = express();

// app.set("view options", { layout: false });
// app.use(express.static(__dirname + "/public"));

// app.get("/", function (req, res) {
//   res.render("index.html");
// });

app.use(express.static("public"));

app.use("/resources", express.static(__dirname + "/resources"));

app.listen(3000, () => {
  console.log(`Started on 3000`);
});

module.exports = key;
