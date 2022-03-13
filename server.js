// The apps required resources to make the app run
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const api = require("./serverRoutes/api");
const html = require("./serverRoutes/html");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./public"));

app.use("/api", api);
app.use("/", html);
// ////////////////////////////
// The live server launching function letting user know server was launched on PORT
// ////////////////////////////

app.listen(PORT, function () {
  console.log(`Live server launched on PORT ${PORT}!`);
});
