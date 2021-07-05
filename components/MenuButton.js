import styles from '../styles/MenuButton.module.scss'
import stylesUtility from '../styles/Utility.module.scss'

const MenuButton = ({ active, handleClick }) => {
  return (
    <button className={`
      ${styles["menu"]}
      ${active ? styles["is_active"] : ""}`}
      type="button"
      onClick={handleClick}>
      <span className={styles.menu_box}>
        <span className={styles.menu_inner}></span>
      </span>
      <span className={stylesUtility.sr_only}>Menu Button</span>
    </button>
  )
}

export default MenuButton
