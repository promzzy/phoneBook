import { useState } from "react";
import ContactRow from "../components/ContactRow";
import SkeletonLoader from "../components/SkeletonLoader";
import classes from "./Homepage.module.css";
import useHomePage from "./hooks/useHomePage";

function Homepage() {

  const { state, dispatch, deleteContacts, manageContact, toggleFavourite } =
    useHomePage();
  const { isLoading, filteredContacts, searchValue } = state;

  return (
    <div className={classes.pageRoot}>
      <div className={classes.contactContainer}>
        <div>
          <div className={classes.contactHeading}>Phonebook</div>
          <div className={classes.searchContainer}>
            <input
              name="name"
              type="text"
              placeholder="Search Contact By Name"
              className={classes.searchInput}
              value={searchValue}
              onChange={({ target }) => {
                dispatch({ searchValue: target.value });
              }}
            />
          </div>
        </div>
        <div className={classes.filterContainer}>
          <button onClick={manageContact} className="showActive">
            Create New Contact
          </button>
        </div>
        <div className={classes.mainBody}>
          <div>
            {isLoading
              ? [...new Array(4).values()].map((_, index) => (
                  <SkeletonLoader className={classes.loader} />
                ))
              : filteredContacts.map((contact) => (
                  <ContactRow
                    onDelete={() => deleteContacts(contact?._id)}
                    onToggleFavourite={() => toggleFavourite(contact?._id)}
                    contact={contact}
                    onEdit={() => manageContact(contact)}
                  />
                ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
