import Link from 'next/link'
import styles from '../styles/Header.module.scss'

const Branding = () => {
  return (
    <h1 className={styles.branding}>
      <Link href='/'><a className={styles.branding_title}>NEXT TEMPLATE</a></Link>
    </h1>
  )
}

export default Branding
