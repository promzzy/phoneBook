# Phone Book App

This project was bootstrapped with `React.js,`, `Node.js`, `Express`, `Redux`, and `Axios`..

## Available Scripts

In the project directory, you can run:

### `npm install`

Installs the application on your local machine and all packages on package.json



### `npm run start:server`

Starts the local server (Node.js Backendend app) in the development mode.\
Open [http://localhost:5000](http://localhost:5000) to interact with the endpoint on postman or with frontend (React.js).


### `npm start`

Runs the Front-end app (React) in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.




## Front-end(React.js) Structure

#### Home Screen
![contacts view](src/assets/WhatsApp%20Image%202023-04-01%20at%2010.36.02%20AM.jpeg "Optional title")



## User story

- user should be able to create contacts
- user should be able to view contacts
- user should be able to delete contact
- user should be able to edit contact
- user should be able to add a contact to favorites
- user should be able to search contacts by name


## Back-end(NODE.js & Express)

## APIS
  - Create Contact
     - `/api/contacts`
     - `POST` Method,  this is a request that handles adding new contact
     - `name`, `email`, `phoneNumber`, `address`, is passed as body

  - Edit Contact
     - `/api/contacts`
     - `PUT` Method,  this is a request that handles editing a contact contact
     - `name`, `email`, `phoneNumber`, `address`, `_id` is passed as body


  - Delete Contact
     - `/api/contacts/:_id`
     - `DELETE` Method,  this is a request that handles deleting a contact


  - Toggles Favorite
     - `/api/contacts/favourite`
     - `PUT` Method,  this is a request that handles marking contact as favorite or not contact
     - `_id`, is passed as body