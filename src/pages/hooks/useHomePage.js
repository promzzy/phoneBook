import { useEffect, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import CreateContact from "../../components/CreateContact";
import { setIsLoading } from "../../redux/feature/appSlice";
import { setContacts } from "../../redux/feature/contactSlice";
import { setPopupChild, showPopup } from "../../redux/feature/popupSlice";
import contactService from "../../services/contacts.service";

function useHomePage() {
  const reduxDispatch = useDispatch();

  const { contacts } = useSelector(({ phoneBook }) => phoneBook);

  const initialState = {
    isLoading: false,
    filteredContacts: [],
    searchValue: "",
  };

  const [state, dispatch] = useReducer(
    (stateVal, value) => ({ ...stateVal, ...value }),
    initialState
  );
  const { searchValue } = state;

  useEffect(() => {
    const filteredItems = contacts.filter((item) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    dispatch({ filteredContacts: filteredItems });
  }, [searchValue, contacts]);

  function getAllContacts() {
    dispatch({ isLoading: true });
    contactService
      .getContacts({})
      .then(({ contacts }) => {
        reduxDispatch(setContacts(contacts));
      })
      .catch((error) => {})
      .finally(() => {
        dispatch({ isLoading: false });
      });
  }

  useEffect(getAllContacts, []); // eslint-disable-line

  function toggleFavourite(id) {
    reduxDispatch(setIsLoading(true));
    contactService
      .toggleFavourite({ _id: id })
      .then(() => {
        getAllContacts();
      })
      .catch((error) => {})
      .finally(() => {
        reduxDispatch(setIsLoading(false));
      });
  }

  function deleteContacts(id) {
    reduxDispatch(setIsLoading(true));
    contactService
      .deleteContacts({ id })
      .then(() => {
        getAllContacts();
      })
      .catch((error) => {})
      .finally(() => {
        reduxDispatch(setIsLoading(false));
      });
  }

  function manageContact(contact) {
    reduxDispatch(
      setPopupChild(
        <CreateContact
          contact={contact}
          isEdit={!!contact?._id}
          onClose={() => {
            reduxDispatch(
              showPopup({
                open: false,
              })
            );
          }}
          onSuccess={() => {
            getAllContacts();
            reduxDispatch(
              showPopup({
                open: false,
              })
            );
          }}
        />
      )
    );
    reduxDispatch(
      showPopup({
        open: true,
      })
    );
  }

  return {
    state,
    dispatch,
    toggleFavourite,
    deleteContacts,
    manageContact,
  };
}

export default useHomePage;
