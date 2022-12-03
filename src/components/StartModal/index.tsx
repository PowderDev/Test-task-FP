import { FormEvent, useState } from "react"
import { useGlobalState } from "../../contexts/StateManager"
import { Modal, ModalProps } from "../Modal"
import styles from "./index.module.scss"

function StartModal(props: ModalProps) {
  const [value, setValue] = useState("")
  const { initializeUser } = useGlobalState()

  const handleOnSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (value.trim()) {
      initializeUser(value.trim())
      setValue("")
    }
  }

  return (
    <Modal {...props}>
      <form onSubmit={handleOnSubmit} className={styles.root}>
        <h3 className={styles.title}>Enter Your Name</h3>
        <input
          className={styles.input}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
        />
        <button className={styles.submit} type="submit">
          Start Chatting
        </button>
      </form>
    </Modal>
  )
}

export default StartModal
