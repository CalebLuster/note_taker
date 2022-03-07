const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3003;

app.listen(PORT, function () {
  console.log(`Live server launched on PORT ${PORT}!`);
});
