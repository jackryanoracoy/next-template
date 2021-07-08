import React, { useState } from "react"
import Meta from '../components/Meta'
import ContactForm from '../components/ContactForm'
import stylesUtility from '../styles/Utility.module.scss'

const contact = () => {
  return (
    <>
      <Meta title='Contact' keywords='Your Keyword' />

      <section className={stylesUtility.section}>
        <h2 className={`
          ${stylesUtility["font_default"]}
          ${stylesUtility["font_extra_large_md"]}
          ${stylesUtility["mb_20"]}
          ${stylesUtility["mb_md_40"]}`}>Contact form using <a href="https://getform.io/" target="blank" rel="noreferrer noopener">getform.io</a></h2>

        <ContactForm />
      </section>
    </>
  )
}

export default contact
