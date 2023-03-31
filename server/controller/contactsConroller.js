const phonebook = require("../model/phonebook");

const contactList = async (req, res) => {
  const contact = await phonebook.find();
  const allContact = (contact || []).map(
    ({ address, name, phoneNumber, _id, isFavorite }) => ({
      address,
      name,
      phoneNumber,
      isFavorite,
      _id,
    })
  );
  res.status(200).send({ status: "success", contacts: allContact });
};

const createContact = async (req, res) => {
  const { phoneNumber, address, name, email } = req.body;
  const contactToSave = new phonebook({
    name,
    phoneNumber,
    address,
    email,
  });
  await contactToSave.save();
  res.status(200).send({ status: "success", contact: contactToSave });
};

const editContact = async (req, res) => {
  const { _id, name, phoneNumber, address, email } = req.body;
  const contact = await phonebook.findOne({ _id });
  const response = await phonebook.findByIdAndUpdate(contact._id, {
    name,
    phoneNumber,
    address,
    email,
  });

  res.status(200).send({ status: "success", response });
};

const toggleFavourite = async (req, res) => {
  const { _id } = req.body;
  const contact = await phonebook.findOne({ _id });
  const response = await phonebook.findByIdAndUpdate(contact._id, {
    isFavorite: !contact.isFavorite,
  });

  res.status(200).send({ status: "success", response });
};
const deleteContact = async (req, res) => {
  const { _id } = req.query;
  const contact = await phonebook.deleteOne(_id);

  res.status(200).send({ status: "success", contact });
};

module.exports = {
  contactList,
  createContact,
  toggleFavourite,
  deleteContact,
  editContact,
};
