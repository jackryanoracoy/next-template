import React, { useState } from "react"
import styles from '../styles/Form.module.scss'
import stylesButton from '../styles/Button.module.scss'
import stylesUtility from '../styles/Utility.module.scss'

export default function ContactGetForm() {

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
    fetch("https://getform.io/f/53cad136-9ef8-4828-977d-893c68021e19", {
      method: "POST",
      body: formData
    }).then(function (response) {
      setFormStatus(true);
      setQuery({ name: "", email: "", message: "" });
      console.log(response);
    }).catch(function (error) {
      console.log(error);
    });
  };

  return (
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

      {formStatus ? (
        <p className={`
          ${stylesUtility["mb_20"]}
          ${stylesUtility["color_success"]}`}>Your message has been sent.</p>
      ) : ( "" )}

      <button className={`
        ${stylesButton["button"]}
        ${stylesButton["is_primary"]}`}
        type="submit">Send Email</button>
    </form>
  )
}
