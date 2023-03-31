import { useState } from 'react'
import ContactRow from '../components/ContactRow'
import { contacts } from '../utils/constants'
import classes from './Homepage.module.css'
import useHomePage from './hooks/useHomePage'

function Homepage(){
  const [ showActive] = useState("ALL")
  const [searchValue] = useState('')

  useHomePage()

  return(<div className={classes.pageRoot}>
    <div  className={classes.contactContainer}>
              <div className={classes.contactHeading}>Phonebook</div>
        <div className={classes.searchContainer}>
            <input name="name" type="text" className={classes.searchInput} value={searchValue} onChange = {e => {} } />

        </div>
         <div className={classes.filterContainer}>
          <button
          onClick = {() => {}}
           className = {`${showActive === "ALL" ? classes.isActive : undefined}`} disabled = {showActive === "ALL"}>Show all</button>
          <button
          onClick = {() => {}}
           className={`${showActive === "FAVOURITE" ? classes.isActive : undefined}`} disabled = {showActive === "FAVOURITE"}>Show favourite</button>
        </div>
    <div>
      {
        contacts.map((contact) => (
          <ContactRow contact={contact} />
        ))
      }
    </div>
    </div>
  </div>)
}

export default Homepage