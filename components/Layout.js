import Meta from './Meta'
import Header from './Header'
import Footer from './Footer'
import styles from '../styles/Layout.module.scss'

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Header />

      <main className={styles.main}>
        <div className={styles.container}>
          {children}
        </div>
      </main>

      <Footer />
    </>
  )
}

export default Layout
