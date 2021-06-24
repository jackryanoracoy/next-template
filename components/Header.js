import { useState } from 'react'
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
  return (
    <header id="header" className={styles.header}>
      <div className={`
        ${styles["header_content"]} 
        ${stylesUtility["bg_primary"]} 
        ${stylesUtility["flex"]} 
        ${stylesUtility["is_jus_spbetween"]} 
        ${stylesUtility["is_alt_center"]}
      `}>
        <div className={styles.header_branding}>
          <h1 className={styles.branding}>
            <Link href='/'><a className={styles.branding_title}>SITE BRANDING</a></Link>
          </h1>
        </div>

        <div className={`
          ${styles["header_menu"]} 
          ${stylesUtility["hidden_lg_min"]}
        `}>
          <button type="button" className={`${styles["menu"]} ${active ? "active" : ""}`} onClick={handleClick}>
            <span className={styles.menu_box}>
              <span className={styles.menu_inner}></span>
            </span>
          </button>
        </div>
      </div>

      <div className={`
        ${styles["header_content"]} 
        ${stylesUtility["bg_secondary"]}
      `}>
        <nav className={`${styles["header_navigation"]} ${active ? "show" : ""}`}>
          <ul className={styles.nav}>
            <li className={`${styles["nav_item"]} ${router.pathname == "/" ? "active" : ""}`}><Link href='/'>Home</Link></li>
            <li className={`${styles["nav_item"]} ${router.pathname == "/about" ? "active" : ""}`}><Link href='/about'>About</Link></li>
            <li className={`${styles["nav_item"]} ${router.pathname == "/articles" ? "active" : ""}`}><Link href='/articles'>Articles</Link></li>
          </ul>
        </nav>
      </div>

      <style jsx>{`
        ul li.active { font-weight: 600; }
        nav.show { max-height: 100vh; }
        button.active > span > span { background-color: rgba(0, 0, 0, 0); }
        button.active > span > span::before { top: 0; transform: rotate(-40deg); }
        button.active > span > span::after { bottom: 0; transform: rotate(40deg); }
      `}</style>
    </header>
  )
}

export default Header
