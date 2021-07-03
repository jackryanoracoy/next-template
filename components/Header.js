import { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import Link from 'next/link'
import styles from '../styles/Header.module.scss'
import stylesUtility from '../styles/Utility.module.scss'

const Header = () => {
  const router = useRouter();

  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  return (
    <header id="header" className={`${styles["header"]} ${scroll ? styles["hide"] : styles["show"]} ${active ? styles["menu_show"] : ""}`}>
      <div className={`
        ${styles["header_content"]} 
        ${stylesUtility["bg_primary"]} 
        ${stylesUtility["flex"]} 
        ${stylesUtility["is_jus_spbetween"]} 
        ${stylesUtility["is_alt_center"]}
      `}>
        <div className={styles.header_branding}>
          <h1 className={styles.branding}>
            <Link href='/'><a className={styles.branding_title}>NEXT TEMPLATE</a></Link>
          </h1>
        </div>

        <div className={`
          ${styles["header_menu"]} 
          ${stylesUtility["hidden_lg_min"]}
        `}>
          <button type="button" className={`${styles["menu"]} ${active ? styles["active"] : ""}`} onClick={handleClick}>
            <span className={styles.menu_box}>
              <span className={styles.menu_inner}></span>
            </span>
            <span className={stylesUtility.sr_only}>Menu Buttonsn</span>
          </button>
        </div>
      </div>

      <div className={`
        ${styles["header_content"]} 
        ${stylesUtility["bg_secondary"]}
      `}>
        <nav className={`${styles["header_navigation"]} ${active ? styles["show"] : ""}`}>
          <ul className={styles.nav}>
            <li className={`${styles["nav_item"]} ${router.pathname == "/" ? styles["active"] : ""}`}><Link href='/'>Home</Link></li>
            <li className={`${styles["nav_item"]} ${router.pathname == "/about" ? styles["active"] : ""}`}><Link href='/about'>About</Link></li>
            <li className={`${styles["nav_item"]} ${router.pathname == "/articles" ? styles["active"] : ""}`}><Link href='/articles'>Articles</Link></li>
            <li className={`${styles["nav_item"]} ${router.pathname == "/contact" ? styles["active"] : ""}`}><Link href='/contact'>Contacts</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
