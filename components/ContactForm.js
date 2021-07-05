
import { useState } from 'react'
import styles from '../styles/Form.module.scss'
import stylesButton from '../styles/Button.module.scss'
import stylesCard from '../styles/Card.module.scss'
import stylesUtility from '../styles/Utility.module.scss'

export default function Contact() {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [formStatus, setFormStatus] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Sending')

    let data = {
      name,
      email,
      message
    }

    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => {
      setFormStatus(true);
      console.log('Response received')
      if (res.status === 200) {
        console.log('Response succeeded!')
        setSubmitted(true)
        setName('')
        setEmail('')
        setMessage('')
      }
    })
  }

  return (
    <>
      <form className={`
        ${styles["form"]}
        ${active ? stylesUtility["hidden"] : ""}
      `}>
        <div className={stylesUtility.mb_20}>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            name="name"
            required
            placeholder="Name"
            onChange={(e)=>{setName(e.target.value)}}
          />
        </div>

        <div className={stylesUtility.mb_20}>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name="email"
            required
            placeholder="Email"
            onChange={(e)=>{setEmail(e.target.value)}}
          />
        </div>

        <div className={stylesUtility.mb_20}>
          <label htmlFor='message'>Message</label>
          <input
            type='text'
            name='message'
            required
            placeholder="Message"
            onChange={(e)=>{setMessage(e.target.value)}}
          />
        </div>

        <button className={`
          ${stylesButton["button"]}
          ${stylesButton["is_primary"]}
          ${name, email, message ? "" : stylesButton["is_disabled"]}`}
          type="button"
          onClick={handleClick}>Send Email</button>
      </form>

      {formStatus ? (
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
      ) : (
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
            `}>
              <div className={stylesUtility.gap_item}>
                <button className={`
                  ${stylesButton["button"]}`}
                  type="button"
                  onClick={handleClick}>Cancel</button>
              </div>
              <div className={stylesUtility.gap_item}>
                <button className={`
                  ${stylesButton["button"]}
                  ${stylesButton["is_primary"]}`}
                  type="submit"
                  onClick={(e)=>{handleSubmit(e)}}>Send Email</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
