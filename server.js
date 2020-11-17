const express = require("express");
const app = express();
const path = require("path");
const PORT = 3001;

app.listen(PORT, () => {
  console.log(`server is running and listening on port ${PORT}`);
});