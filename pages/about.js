import Meta from '../components/Meta'
import stylesUtility from '../styles/Utility.module.scss'

const about = () => {
  return (
    <div>
      <Meta title='About' keywords='Your Keyword' />

      <section className={stylesUtility.section}>
        <h2 className={`
        ${stylesUtility["font_extra_large"]} 
        ${stylesUtility["mb_40"]}`}>About</h2>
      </section>
    </div>
  )
}

export default about
