import clsx from "clsx"
import { useGlobalState } from "../../contexts/StateManager"
import styles from "./index.module.scss"

function MessagesWindow() {
  const { messages, userId } = useGlobalState()

  return (
    <div className={styles.root}>
      {messages.map((msg) => (
        <div
          key={msg.id}
          className={clsx(styles.message, msg.userId === userId && styles.myMessage)}
        >
          <p className={styles.messageContent}>{msg.content}</p>
          <div className={styles.messageInfo}>
            <span>{msg.name}</span>
            <span>{msg.date.slice(0, 10)}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default MessagesWindow
