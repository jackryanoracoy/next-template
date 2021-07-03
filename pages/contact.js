import React, { useState } from "react"
import styles from '../styles/Form.module.scss'
import stylesButton from '../styles/Button.module.scss'
import stylesCard from '../styles/Card.module.scss'
import stylesUtility from '../styles/Utility.module.scss'

export default function App() {
  const [formStatus, setFormStatus] = useState(false);
  const [query, setQuery] = useState({
    name: "",
    email: ""
  });

  // Update inputs value
  const handleParam = () => (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuery((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };
  // Form Submit function
  const formSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(query).forEach(([key, value]) => {
      formData.append(key, value);
    });
    fetch("https://getform.io/{your-form-endpoint}", {
      method: "POST",
      body: formData
    })
    .then(function (response) {
      setFormStatus(true);
      setQuery({ name: "", email: "", message: "" });
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  };
  
  return (
    <section className={stylesUtility.section}>
      <h2 className={`
        ${stylesUtility["font_default"]}
        ${stylesUtility["font_extra_large_md"]} 
        ${stylesUtility["mb_20"]}
        ${stylesUtility["mb_md_40"]}`}>Contact form using Getform.io</h2>

        {formStatus ? ( 
          <div className={`
            ${stylesCard["card"]} 
            ${stylesUtility["block"]}
            ${stylesUtility["mb_20"]}
          `}>
            <div className={stylesCard.card_content}>
              <p className={stylesUtility.color_success}>Your message has been sent.</p>
            </div>
          </div>
        ) : ( "" )}

      <form className={styles.form} onSubmit={formSubmit}>
        <div className={stylesUtility.mb_20}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            required
            placeholder="Name"
            value={query.name}
            onChange={handleParam()}
          />
        </div>

        <div className={stylesUtility.mb_20}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            required
            placeholder="Email"
            value={query.email}
            onChange={handleParam()}
          />
        </div>

        <div className={stylesUtility.mb_20}>
          <label>Message</label>
          <textarea
            name="message"
            required
            onChange={handleParam()}>{query.message}</textarea>
        </div>
        
        <button className={`
          ${stylesButton["button"]} 
          ${stylesButton["is_primary"]}`} 
          type="submit">Send Email</button>
      </form>
    </section>
  );
}