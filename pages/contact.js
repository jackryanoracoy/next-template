import React, { useState } from "react"
import ContactGetForm from '../components/ContactGetForm'
import ContactForm from '../components/ContactForm'
import stylesUtility from '../styles/Utility.module.scss'

const contact = () => {
  return (
    <section className={stylesUtility.section}>
      <h2 className={`
        ${stylesUtility["font_default"]}
        ${stylesUtility["font_extra_large_md"]}
        ${stylesUtility["mb_20"]}
        ${stylesUtility["mb_md_40"]}`}>Contact form using <a href="https://nodemailer.com/about/" target="blank" rel="noreferrer noopener">NodeMailer</a></h2>

      <ContactForm />
    </section>
  )
}

export default contact
