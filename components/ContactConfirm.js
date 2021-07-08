
import stylesButton from '../styles/Button.module.scss'
import stylesCard from '../styles/Card.module.scss'
import stylesUtility from '../styles/Utility.module.scss'

const ContactConfirm = ({ active, handleClick, handleSubmit, name, email, message }) => {
  return (
    <div className={`
      ${stylesCard["card"]}
      ${stylesUtility["block"]}
      ${active ? "" : stylesUtility["hidden"]}
    `}>
      <div className={stylesCard.card_content}>
        <h3 className={`
          ${stylesUtility["font_default"]}
          ${stylesUtility["font_large_md"]}
          ${stylesUtility["mb_20"]}
          ${stylesUtility["mb_md_40"]}`}>Confirm Details</h3>

        <div className={`
          ${stylesUtility["flex"]}
          ${stylesUtility["is_jus_spbetween"]}
          ${stylesUtility["gap_20"]}
        `}>
          <div className={`
            ${stylesUtility["flex_item_12"]}
            ${stylesUtility["flex_item_sm_2"]}
          `}>
            <h5>NAME:</h5>
          </div>
          <div className={`
            ${stylesUtility["flex_item_12"]}
            ${stylesUtility["flex_item_sm_10"]}
          `}>
            <p>{name}</p>
          </div>
          <div className={`
            ${stylesUtility["flex_item_12"]}
            ${stylesUtility["flex_item_sm_2"]}
          `}>
            <h5>EMAIL:</h5>
          </div>
          <div className={`
            ${stylesUtility["flex_item_12"]}
            ${stylesUtility["flex_item_sm_10"]}
          `}>
            <p>{email}</p>
          </div>
          <div className={`
            ${stylesUtility["flex_item_12"]}
            ${stylesUtility["flex_item_sm_2"]}
          `}>
            <h5>MESSAGE:</h5>
          </div>
          <div className={`
            ${stylesUtility["flex_item_12"]}
            ${stylesUtility["flex_item_sm_10"]}
          `}>
            <p>{message}</p>
          </div>
        </div>

        <div className={`
          ${stylesUtility["flex"]}
          ${stylesUtility["gap_20"]}
          ${stylesUtility["mt_20"]}
        `}>
          <div className={stylesUtility.flex_item}>
            <button className={`
              ${stylesButton["button"]}`}
              type="button"
              onClick={handleClick}>Cancel</button>
          </div>
          <div className={stylesUtility.flex_item}>
            <button
              className={`
                ${stylesButton["button"]}
                ${stylesButton["is_primary"]}
              `}
              type="submit"
              onClick={(e)=>{handleSubmit(e)}}>Send Email</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactConfirm
