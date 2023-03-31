import { serverUrl } from "../env";
import { request } from "./api";

const URL = {
  getContacts: `${serverUrl}/api/contacts`,
  createContact: `${serverUrl}/api/contacts`,
  deleteContacts: (id) => `${serverUrl}/api/contacts/${id}`,
  toggleFavourite: `${serverUrl}/api/contacts/favourite`,
};

function getContacts(params) {
  return request(URL.getContacts, params, "GET");
}
function toggleFavourite(params) {
  return request(URL.toggleFavourite, params, "PUT");
}
function deleteContacts({ id }) {
  return request(URL.deleteContacts(id), {}, "DELETE");
}
function createContact(params) {
  return request(URL.createContact, params, "POST");
}
function updateContact(params) {
  return request(URL.createContact, params, "PUT");
}

const contactService = {
  getContacts,
  toggleFavourite,
  deleteContacts,
  createContact,
  updateContact,
};

export default contactService;
