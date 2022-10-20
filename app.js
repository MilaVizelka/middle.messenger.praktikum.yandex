import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

const PORT = 3000;
app.set("view engine", "pug");

const FOLDER = `${process.cwd()}/dist`;
app.use(express.static(FOLDER));

// app.use(express.static(__dirname + "/dist"));

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
// app.listen(PORT, console.log("success"));
const port = 3000;
const hostname = 'localhost';
app.listen(port, hostname, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});