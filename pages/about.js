import Meta from '../components/Meta'
import AboutContent from '../components/AboutContent'
import stylesUtility from '../styles/Utility.module.scss'

const about = () => {
  return (
    <>
      <Meta title='About' keywords='Your Keyword' />

      <section className={stylesUtility.section}>
        <h2 className={`
          ${stylesUtility["font_default"]}
          ${stylesUtility["font_extra_large_md"]}
          ${stylesUtility["mb_20"]}
          ${stylesUtility["mb_md_40"]}`}>About</h2>

        <AboutContent />
      </section>
    </>
  )
}

export default about
