import React from 'react'
import FormInput from "./formStyles.js"

const ContactForm = () => {
  return (
    <form action="" onSubmit="">
      <div>
        <h2>Contact Form</h2>
        <span>Full Name</span>
        <br />
        <FormInput/>
        <br />
        <span>Organization</span>
        <br />
        <input
          type="text"
          name="Name"
          required
        />
        <br />
        <span>Email Address</span>
        <br />
        <input
          type="text"
          name="Name"
          placeholder=''
          required
        />
        <br />
        <span>Contact Reason</span>
        <br />
        <input
          type="text"
          name="headline"
          placeholder="" 
          required
        />
        <br />
        <span>Message</span>
        <br />
        <input
          type="text"
          name="headline"
          placeholder="" 
          required
        />
        <br />
        <span>Captcha</span>
        <br />
      </div>  
    </form>
  )
}

export default ContactForm