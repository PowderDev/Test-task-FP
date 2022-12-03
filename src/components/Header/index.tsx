import { useGlobalState } from "../../contexts/StateManager"
import styles from "./index.module.scss"

function Header() {
  const { name } = useGlobalState()

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Frontend Production</h1>
      {name && <div className={styles.username}>{name}</div>}
    </header>
  )
}

export default Header
