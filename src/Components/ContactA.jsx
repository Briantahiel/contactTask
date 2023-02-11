import React from 'react'
import { Contact } from '../Models/Contact.class'
import ContactB from './ContactB'

const ContactA = () => {

    const defaultContact = new Contact('John', 'Doe', 'email@email.com', true)
  return (
    <div>
     <h2>ContactA</h2> 
        <ContactB contact={defaultContact}/>
    </div>
  )
}

export default ContactA