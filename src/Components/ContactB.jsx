import React from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../Models/Contact.class'

const ContactB = ({ contact }) => {
  return (
    <div>
      <h2>Name: { contact.name }</h2>
      <h3>Lastname: { contact.lastname }</h3>
      <h4>Email: { contact.email }</h4>
      <h5>This contact is: { contact.conected ? 'Online' : 'Offline' }</h5>
    </div>
  )
}

ContactB.propTypes = {
    contact: PropTypes.instanceOf(Contact)
}

export default ContactB;