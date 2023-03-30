const express = require("express");
const path = require("path");
const contacts = require("./routes/contacts");

const app = express();

const port = 5000;
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
