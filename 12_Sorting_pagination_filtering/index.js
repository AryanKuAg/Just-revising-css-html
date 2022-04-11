const express = require("express");
require("./db.js");
const User = require("./model/User");
const app = express();

const port = process.env.PORT || 3000;

app.get("/", async (req, res) => {
  const user = await new User({ name: "Aryan", age: 23 });
  const idk = await user.save();
  console.log(idk);

  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
