const express = require("express");
const path = require("path");

const PORT = 3000;
const app = express();

app.use("/assets", express.static(path.join(__dirname, "assets")));

app.use("/static", express.static(path.join(__dirname, "static")));

app.set("views", path.join(__dirname, "views"));

app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("index", { title: "Home" });
});
app.get("/settings", (req, res) => {
  res.render("settings", { title: "Settings" });
});

app.listen(PORT, console.log("success"));
