import styles from '../styles/Layout.module.scss'
import stylesUtility from '../styles/Utility.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={stylesUtility.bg_grey_700}>
        <div className={styles.container}>
          <section className={`${stylesUtility["section"]} ${stylesUtility["has_padding_narrow"]}`}>
            <h5 className={`
              ${stylesUtility["text_center"]} 
              ${stylesUtility["color_light"]}
            `}>EXTENDED FOOTER</h5>
          </section>
        </div>
      </div>

      <div className={stylesUtility.bg_grey_900}>
        <div className={styles.container}>
          <section className={`${stylesUtility["section"]} ${stylesUtility["has_padding_narrow"]}`}>
            <h5 className={`
              ${stylesUtility["text_center"]} 
              ${stylesUtility["color_light"]}
            `}>&copy; 2019 - SITE TITLE</h5>
          </section>
        </div>
      </div>
    </footer>
  )
}

export default Footer
