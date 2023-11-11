const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static(path.join(__dirname, "dist")));

app.set("view engine", "hbs");

app.get("/", (req, res) => {
    res.render("index.html", {title: "SignInPage"});
});

app.listen(PORT, () => console.log("success"))
