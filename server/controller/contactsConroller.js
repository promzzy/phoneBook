const phonebook = require("../model/phonebook");

const contactList = async (req, res) => {
  try {
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
  } catch (err) {
    res.status(400).send({ status: "failed", err });
  }
};

const createContact = async (req, res) => {
  const { phoneNumber, address, name, email } = req.body;
  try {
    const contactToSave = new phonebook({
      name,
      phoneNumber,
      address,
      email,
    });
    await contactToSave.save();
    res.status(200).send({ status: "success", contact: contactToSave });
  } catch (err) {
    res.status(400).send({ status: "failed", err });
  }
};

const editContact = async (req, res) => {
  const { _id, name, phoneNumber, address, email } = req.body;
  try {
    const contact = await phonebook.findOne({ _id });
    const response = await phonebook.findByIdAndUpdate(contact._id, {
      name,
      phoneNumber,
      address,
      email,
    });

    res.status(200).send({ status: "success", response });
  } catch (err) {
    res.status(400).send({ status: "failed", err });
  }
};

const toggleFavourite = async (req, res) => {
  const { _id } = req.body;
  try {
    const contact = await phonebook.findOne({ _id });
    const response = await phonebook.findByIdAndUpdate(contact._id, {
      isFavorite: !contact.isFavorite,
    });

    res.status(200).send({ status: "success", response });
  } catch (err) {
    res.status(400).send({ status: "failed", err });
  }
};
const deleteContact = async (req, res) => {
  const { _id } = req.query;
  try {
    const contact = await phonebook.deleteOne(_id);

    res.status(200).send({ status: "success", contact });
  } catch (err) {
    res.status(400).send({ status: "failed", err });
  }
};

module.exports = {
  contactList,
  createContact,
  toggleFavourite,
  deleteContact,
  editContact,
};
