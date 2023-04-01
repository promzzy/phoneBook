const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const contacts = require("./routes/contacts");
const connectDB = require("./dbConfig/db");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
dotenv.config();

// use body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
connectDB();

const port = process.env.PORT || 5000;

// app.use(express.static(path.join(__dirname, "build")));
// app.get("*", (req, res) => {
//   res.sendFile("index.html", { root: path.join(__dirname, "") });
// });

app.use("/api/contacts", contacts);

app.all("*", (req, res) => {
  res.status(404).send("<h2>Page not found</h2>");
});

app.listen(port, () => {
  console.log(`running on port ${port}......`);
});

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen
