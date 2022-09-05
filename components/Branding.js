import { useRouter } from "next/router";
import Link from 'next/link'
import styles from '../styles/Branding.module.scss'

const Branding = () => {
  const router = useRouter();
  const brandingName = <Link href='/'><a className={styles.branding_title}>{`NEXT TEMPLATE`}</a></Link>;

  return (
    router.pathname == "/"
    ? <h1 className={styles.branding}>{brandingName}</h1>
    : <p className={styles.branding}>{brandingName}</p>
  )
}

export default Branding
