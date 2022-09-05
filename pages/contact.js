import React, { useState } from "react"
import Meta from '../components/Meta'
import ContactForm from '../components/ContactForm'
import stylesUtility from '../styles/Utility.module.scss'

const pageTitle = 'Contact';
const pageKeyword = 'Keyword here!';

const contact = () => {
  return (
    <>
      <Meta
        title={pageTitle}
        keywords={pageKeyword}
      />

      <div className={stylesUtility.container}>
        <section className={stylesUtility.section}>
          <h1 className={`
            ${stylesUtility["font_default"]}
            ${stylesUtility["font_extra_large_md"]}
            ${stylesUtility["mb_20"]}
            ${stylesUtility["mb_md_40"]}
          `}>
            {pageTitle} <a href="https://getform.io/" target="blank" rel="noreferrer noopener">{`getform.io`}</a>
          </h1>

          <ContactForm />
        </section>
      </div>
    </>
  )
}

export default contact
