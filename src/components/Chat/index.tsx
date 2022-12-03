import Form from "../Form"
import MessagesWindow from "../MessagesWindow"
import styles from "./index.module.scss"

function Chat() {
  return (
    <div className={styles.root}>
      <MessagesWindow />
      <Form />
    </div>
  )
}

export default Chat
