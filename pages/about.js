import React, { useState } from "react"
import Meta from '../components/Meta'
import AboutContent from '../components/AboutContent'
import stylesUtility from '../styles/Utility.module.scss'

const pageTitle = 'About';
const pageKeyword = 'Keyword here!';

const about = ({ about }) => {
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
            {pageTitle}
          </h1>

          <AboutContent about={about}/>
        </section>
      </div>
    </>
  )
}

export default about

export const getStaticProps = async () => {
  const aboutRes = await fetch(`https://my-json-server.typicode.com/jackryanoracoy/jsonplaceholder/about/`, {
    method: 'PUT',
    body: JSON.stringify({
      //This will update the current response to the below text.
      body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta.',
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  const about = await aboutRes.json()
  
  return {
    props: {
      about,
    },
  }
}