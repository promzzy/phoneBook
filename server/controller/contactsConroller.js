const phonebook = require("../model/phonebook");

const contactList = async (req, res) => {
  const contact = await phonebook.find();
  const allContact = (contact || []).map(
    ({ address, name, phoneNumber, _id }) => ({
      address,
      name,
      phoneNumber,
      _id,
    })
  );
  res.status(200).send({ status: "success", contacts: allContact });
};

module.exports = {
  contactList,
};
