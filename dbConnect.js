const mongoose = require("mongoose");


mongoose.connect(
  "mongodb+srv://jayeshkulkarni1703:<password>@cluster0.kteok1g.mongodb.net/",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const connection = mongoose.connection;

connection.on("error", (err) => console.log(err));

connection.on("connected", () =>
  console.log("Mongo DB Connection Successfull")
);
