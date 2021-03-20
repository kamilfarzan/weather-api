require("dotenv").config();

const key = process.env.API_KEY;
const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Started on ${port}`);
});
