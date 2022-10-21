const express = require("express");
const path = require("path");

const PORT = 3000;
const app = express();

app.set("views", path.join(__dirname, "views"));

app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("index", { title: "Home" });
});

app.listen(PORT, console.log("success"));
