const express = require("express");
const app = express();
const port = 3002;

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

    console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);
    channel.consume(
      queue,
      function (msg) {
        console.log(" [x] Received %s", msg.content.toString());
      },
      {
        noAck: true,
      }
    );
  });
});

app.get("/", (req, res) => {
  console.log("Received a get request for /");
  // тут надо делать запрос на profiles, чтобы он возвращал инфо про importantUser
  res.send(
    `Ahh, it will be a long story bout me ;)\nBtw, user ${importantUserID} was very important to our platform, so here is some info abt him: `
  );
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
