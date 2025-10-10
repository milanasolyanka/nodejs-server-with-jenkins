const express = require("express");
const app = express();
const port = 3001;

app.get("/", (req, res) => {
  console.log("Received a get request");
  res.send("Howdy, I am a server ;)");
});

app.get("/profiles/:id", (req, res) => {
  const profileId = req.params.id;
  console.log(`Received a get request for profile ID: ${profileId}`);
  res.send(`Howdy! You asked bout a person w profile id: ${profileId}`);
});

app.post("/profiles/:id", (req, res) => {
  const profileId = req.params.id;
  console.log(`Received a post request for profile ID: ${profileId}`);
  res.send(
    `Howdy, I jus received your POST request on a profile w id: ${profileId} ;)`
  );
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
