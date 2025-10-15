const express = require("express");
const app = express();
const port = 3001;

let amqp = require("amqplib/callback_api");
amqp.connect("amqp://rabbitmq", function (error0, connection) {
  if (error0) {
    throw error0;
  }
  connection.createChannel(function (error1, channel) {
    if (error1) {
      throw error1;
    }

    let queue = "funfacts";
    channel.assertQueue(queue, {
      durable: false,
    });

    // msg = "Hello world";
    // channel.sendToQueue(queue, Buffer.from(msg));
    // console.log(" [x] Sent %s", msg);

    setInterval(() => {
      let msg = generateFunfact(getRandomArbitrary(1, 300));
      channel.sendToQueue(queue, Buffer.from(msg));
      console.log(`Sent message "${msg}" to queue`);
    }, 10 * 1000);
  });
});

app.get("/", (req, res) => {
  console.log("Received a get request");
  res.send("Howdy, I am a server ;)");
});

app.get("/:id", (req, res) => {
  const profileID = req.params.id;
  console.log(`Received a get request for profile ID: ${profileID}`);
  res.send(getProfileInfoByID(profileID));
});

app.post("/:id", (req, res) => {
  const profileID = req.params.id;
  console.log(`Received a post request for profile ID: ${profileID}`);
  res.send(
    `Howdy, I jus received your POST request on a profile w id: ${profileID} ;)`
  );
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});

function getProfileInfoByID(profileID) {
  return `Howdy! You asked bout a person w profile id: ${profileID}`;
}

function generateFunfact(profileID) {
  return `Fun fact about user ${profileID}: they are very smart and attractive <3`;
}

function getRandomArbitrary(min, max) {
  return Math.trunc(Math.random() * (max - min) + min);
}
