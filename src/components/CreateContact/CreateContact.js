import Button from "../Button";
import InputField from "../InputField";
import useManagerTeamMember from "./hooks/useCreateContact";
import classes from "./CreateContact.module.css";
import { useEffect } from "react";

const ManagerTeamMember = ({ isEdit, onSuccess, onClose, contact }) => {
  const { state, dispatch, createContact } = useManagerTeamMember(
    onSuccess,
    isEdit
  );

  useEffect(() => {
    if (isEdit) {
      dispatch({
        name: contact?.name,
        email: contact?.email,
        phoneNumber: contact?.phoneNumber,
        address: contact?.address,
        _id: contact._id,
      });
    }
  }, [contact, isEdit]);

  const { name, address, email, phoneNumber } = state;
  return (
    <div className={classes.ManageTeamRoot}>
      <form className={classes.form} onSubmit={(e) => e.preventDefault()}>
        <h3>{`${isEdit ? "Edit" : "Add New"} Member`}</h3>
        <div className={classes.inputWrap}>
          <div className={classes.inputRow}>
            <InputField
              className={classes.taskTitleInput}
              value={name}
              onChange={({ target }) => dispatch({ name: target.value })}
              placeholder="Full Name"
              name="name"
            />
            <InputField
              className={classes.taskTitleInput}
              value={email}
              onChange={({ target }) => dispatch({ email: target.value })}
              name="email"
              placeholder="Email"
            />
          </div>
          <div className={classes.inputRow}>
            <InputField
              className={classes.taskTitleInput}
              value={phoneNumber}
              onChange={({ target }) => dispatch({ phoneNumber: target.value })}
              name="phoneNumber"
              placeholder="Phone Number"
            />
            <InputField
              className={classes.taskTitleInput}
              placeholder="Address"
              value={address}
              onChange={({ target }) => dispatch({ address: target.value })}
              name="address"
            />
          </div>
        </div>

        <div className={classes.actionBox}>
          <Button onClick={onClose} className={classes.cancelBtn}>
            Cancel
          </Button>
          <Button onClick={createContact}>Submit</Button>
        </div>
      </form>
    </div>
  );
};

export default ManagerTeamMember;
