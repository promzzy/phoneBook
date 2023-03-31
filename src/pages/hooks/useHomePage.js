import { useEffect } from "react";
import contactService from "../../services/contacts.service";

function useHomePage() {
  useEffect(() => {
    contactService
      .getContacts({})
      .then(({ contacts }) => {
        console.log(contacts);
      })
      .catch((error) => {})
      .finally(() => {});
  }, []);
}

export default useHomePage;
