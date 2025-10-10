const express = require("express");
const app = express();
const port = 3002;

app.get("/about", (req, res) => {
  console.log("Received a get request for /about");
  res.send("Ahh, it will be a long story bout me ;)");
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
