const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  console.log("Received a get request");
  res.send("A responce to a get request on /");
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
