const express = require("express");
const {
  contactList,
  createContact,
  toggleFavourite,
  deleteContact,
  editContact,
} = require("../controller/contactsConroller");

const router = express.Router();

router.get("/", contactList);
router.post("/", createContact);
router.put("/", editContact);
router.put("/favourite", toggleFavourite);
router.delete("/:_id", deleteContact);

module.exports = router;
