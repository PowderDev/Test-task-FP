import { FormEvent, useState } from "react"
import { useGlobalState } from "../../contexts/StateManager"
import styles from "./index.module.scss"

function Form() {
  const [content, setContent] = useState("")
  const { sendMessage } = useGlobalState()

  const handleOnSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (content.trim()) {
      sendMessage(content.trim())
      setContent("")
    }
  }

  return (
    <form className={styles.root} onSubmit={handleOnSubmit}>
      <textarea
        className={styles.textarea}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Your message..."
      ></textarea>
      <button className={styles.submit} type="submit">
        Send
      </button>
    </form>
  )
}

export default Form
