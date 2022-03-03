import Meta from '../components/Meta'
import AboutContent from '../components/AboutContent'
import stylesUtility from '../styles/Utility.module.scss'

const pageTitle = 'About';
const pageKeyword = 'Keyword here!';

const about = () => {
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

          <AboutContent />
        </section>
      </div>
    </>
  )
}

export default about
