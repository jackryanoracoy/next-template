import { useState } from 'react'
import ContactConfirm from './ContactConfirmNodeMailer'
import ContactSent from './ContactSent'
import styles from '../styles/Form.module.scss'
import stylesButton from '../styles/Button.module.scss'
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
    <form className={styles.form}>
      <div className={active ? stylesUtility["hidden"] : ""}>
        <div className={stylesUtility.mb_20}>
          <label htmlFor='name'>Name</label>
          <input
            type="text"
            name="name"
            required
            placeholder="Name"
            onChange={(e)=>{setName(e.target.value)}}
          />
        </div>

        <div className={stylesUtility.mb_20}>
          <label htmlFor='email'>Email</label>
          <input
            type="email"
            name="email"
            required
            placeholder="Email"
            onChange={(e)=>{setEmail(e.target.value)}}
          />
        </div>

        <div className={stylesUtility.mb_20}>
          <label htmlFor='message'>Message</label>
          <input
            type="text"
            name="message"
            required
            placeholder="Message"
            onChange={(e)=>{setMessage(e.target.value)}}
          />
        </div>

        <button
          className={`
            ${stylesButton["button"]}
            ${stylesButton["is_primary"]}
          `}
          type="button"
          onClick={handleClick}>Send Email</button>
      </div>

      {formStatus ? (
        <ContactSent
          active={active}
        />
      ) : (
        <ContactConfirm
          active={active}
          handleClick={handleClick}
          handleSubmit={handleSubmit}
          name={name}
          email={email}
          message={message}
        />
      )}

    </form>
  )
}
