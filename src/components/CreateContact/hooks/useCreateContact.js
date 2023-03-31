import { useReducer } from "react";
import { useDispatch } from "react-redux";
import { setIsLoading } from "../../../redux/feature/appSlice";
import contactService from "../../../services/contacts.service";

function useCreateContact(onSuccess, isEditor) {
  const reduxDispatch = useDispatch();
  const initialState = {
    name: "",
    address: "",
    email: "",
    phoneNumber: "",
    _id: null,
  };

  const [state, dispatch] = useReducer(
    (stateVal, value) => ({ ...stateVal, ...value }),
    initialState
  );
  const { name, address, email, phoneNumber, _id } = state;
  function createContact() {
    reduxDispatch(setIsLoading(true));
    contactService[isEditor ? "updateContact" : "createContact"]({
      name,
      address,
      email,
      phoneNumber,
      _id,
    })
      .then(() => {
        onSuccess?.();
      })
      .catch((error) => {})
      .finally(() => {
        reduxDispatch(setIsLoading(false));
      });
  }
  return {
    state,
    dispatch,
    createContact,
  };
}

export default useCreateContact;
