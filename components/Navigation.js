import { useRouter } from "next/router";
import Link from 'next/link'
import styles from '../styles/Navigation.module.scss'

const Navigation = () => {
  const router = useRouter();

  return (
    <ul className={styles.nav}>
      <li className={`
        ${styles["nav_item"]}
        ${router.pathname == "/" ? styles["is_active"] : ""}
      `}>
        <Link href='/'>{`Home`}</Link>
      </li>

      <li className={`
        ${styles["nav_item"]}
        ${router.pathname == "/about" ? styles["is_active"] : ""}
      `}>
        <Link href='/about'>{`About`}</Link>
      </li>

      <li className={`
        ${styles["nav_item"]}
        ${router.pathname == "/articles" ? styles["is_active"] : ""}
      `}>
        <Link href='/articles'>{`Articles`}</Link>
      </li>

      <li className={`
        ${styles["nav_item"]}
        ${router.pathname == "/contact" ? styles["is_active"] : ""}
      `}>
        <Link href='/contact'>{`Contacts`}</Link>
      </li>
    </ul>
  )
}

export default Navigation
