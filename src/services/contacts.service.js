import { serverUrl } from "../env";
import { request } from "./api";

const URL = {
  getContacts: `${serverUrl}/api/contacts`,
};

function getContacts(params) {
  return request(URL.getContacts, { params }, "GET");
}

const contactService = {
  getContacts,
};

export default contactService;
