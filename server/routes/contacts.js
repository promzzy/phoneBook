const express = require("express");
const { contactList } = require("../controller/contactsConroller");

const router = express.Router();

router.get("/", contactList);

module.exports = router;
