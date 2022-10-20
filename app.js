const express = require("express");
const path = require("path");

const PORT = 3000;
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("index", { title: "Home" });
});

// app.use(express.static(path.join(__dirname, '/dist')));

// app.get("/", (req, res) => {
//   res.render("index", { title: "Main page" });
// });
// app.get("/reg", (req, res) => {
//   res.render("reg-page", { title: "Reg page" });
// });
// app.get("/sign-in", (req, res) => {
//   res.render("sign-in-page", { title: "Sigh-in page" });
// });
// app.get("/error-404", (req, res) => {
//   res.render("error-404-page", { title: "Error 404 page" });
// });
// app.get("/error", (req, res) => {
//   res.render("error-page", { title: "Error page" });
// });
app.listen(PORT, console.log("success"));
