const { contacts } = require("../constants");

const contactList = (req, res) => {
  res.status(200).send({ status: "success", contacts });
};

module.exports = {
  contactList,
};
