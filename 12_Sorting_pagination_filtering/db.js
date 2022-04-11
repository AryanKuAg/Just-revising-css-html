const mongoose = require("mongoose");

const connectDb = async () => {
  console.log("this get called");
  try {
    const connection = await mongoose.connect(
      "mongodb://localhost:27017/sexyAryanDatabase",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("connection", connection);
  } catch (error) {
    console.log(error.message);
    console.log("hey tere its an error");
  }
};
connectDb();

module.exports = connectDb;
