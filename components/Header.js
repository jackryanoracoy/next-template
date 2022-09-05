import { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import Navigation from './Navigation'
import Branding from './Branding'
import MenuButton from './MenuButton'
import styles from '../styles/Header.module.scss'
import stylesUtility from '../styles/Utility.module.scss'

const Header = () => {
  const router = useRouter();
  const [active, setActive] = useState(false);
  const handleClick = () => setActive(!active);
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  useEffect(() => {
    setActive(false);
  }, [router.pathname]);

  return (
    <header className={`
      ${styles["header"]}
      ${scroll ? styles["is_hidden"] : ""}
      ${active ? styles["is_shown"] : ""}
    `}>
      <div className={`
        ${styles["header_content"]}
        ${stylesUtility["bg_primary"]}
        ${stylesUtility["flex"]}
        ${stylesUtility["is_jus_spbetween"]}
        ${stylesUtility["is_alt_center"]}
      `}>
        <div className={styles.header_branding}>
          <Branding />
        </div>

        <div className={`
          ${styles["header_menu"]}
          ${stylesUtility["hidden_lg_min"]}
        `}>
          <MenuButton active={active} handleClick={handleClick} />
        </div>
      </div>

      <div className={`
        ${styles["header_content"]}
        ${stylesUtility["bg_secondary"]}
      `}>
        <nav className={`
          ${styles["header_navigation"]}
          ${active ? styles["is_shown"] : ""}
        `}>
          <Navigation />
        </nav>
      </div>
    </header>
  )
}

export default Header
