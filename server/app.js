const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const contacts = require("./routes/contacts");
const connectDB = require("./config/db");

const phonebook = require("./model/phonebook");

dotenv.config({ path: "./config/config.env" });
connectDB();
const app = express();
const port = process.env.PORT || 5000;
async function saveContact() {
  const contact = new phonebook({
    name: "promise stephen",
    phoneNumber: "08064453298",
    address: "Abuja Nigeria",
  });
  await contact.save();
  console.log(contact);
}

app.use(cors());

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
