
import stylesCard from '../styles/Card.module.scss'
import stylesUtility from '../styles/Utility.module.scss'

const ContactSent = ({ active }) => {
  return (
    <div className={`
      ${stylesCard["card"]}
      ${stylesUtility["block"]}
      ${active ? "" : stylesUtility["hidden"]}
    `}>
      <div className={stylesCard.card_content}>
        <h3 className={`
          ${stylesUtility["mt_50"]}
          ${stylesUtility["mb_50"]}
          ${stylesUtility["color_success"]}`}>Your message has been sent.</h3>
      </div>
    </div>
  )
}

export default ContactSent
