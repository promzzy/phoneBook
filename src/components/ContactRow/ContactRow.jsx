import classes from './ContactRow.module.css'

function ContactRow({contact, onToggleFavourite, onEdit, onDelete}){

  return(
               <div className={classes.contact} key={contact.id}>
              <div className="contact-details">
                <div className={classes.contactName}>{contact.name}</div>
                <div className="contact-phone">{contact.phoneNumber}</div>
                <div className="contact-phone">{contact.address}</div>
              </div>
              <div className={classes.contactAction}>
              {
                contact.favourite ? (
                <button onClick = {onToggleFavourite} title="Mark as non-favourite">
                ⭐️
                </button>
                ) : (
                <button onClick = {onToggleFavourite} title="Mark as favourite">
                ✩
                </button>
                )
              }
                <button onClick = {onEdit}>Edit</button>
                <button onClick = {onDelete}>Delete</button>
              </div>
            </div>
  )
}

export default ContactRow