const mongoose = require("mongoose");

const config =
  "mongodb+srv://promzzy2020:Prozzy2020@phonebook.djhsxlf.mongodb.net/?retryWrites=true&w=majority";
async function connectDB() {
  try {
    const response = await mongoose.connect(config, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useFindAndModify: false,
    });
    console.log(`MongoDB Connected:`, response.connection.host);
  } catch (err) {
    console.log("error:", err);
    process.exit(1);
  }
}

module.exports = connectDB;
