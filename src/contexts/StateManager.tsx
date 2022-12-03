import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react"
import { GlobalStateManager, Message } from "./types."

export const StateMangerContext = createContext<GlobalStateManager>({} as GlobalStateManager)

export function StateManager({ children }: PropsWithChildren) {
  const [messages, setMessages] = useState<Message[]>([])
  const [name, setName] = useState(sessionStorage.getItem("name") ?? "")
  const [userId, setUserId] = useState(sessionStorage.getItem("userId") ?? "")

  useEffect(() => {
    if (localStorage.getItem("messages")) {
      setLatestMessages()
    } else {
      localStorage.setItem("messages", "[]")
    }
  }, [])

  useEffect(() => {
    window.addEventListener("storage", setLatestMessages)
    return () => {
      window.removeEventListener("storage", setLatestMessages)
    }
  }, [])

  const isInitialized = useMemo(() => !!name && !!userId, [name, userId])

  const setLatestMessages = () => {
    setMessages(JSON.parse(localStorage.getItem("messages")!))
  }

  const sendMessage = (content: string) => {
    const nextId = messages.length > 0 ? messages.at(-1)?.id! + 1 : 1
    const msg: Message = {
      id: nextId,
      content,
      date: new Date().toISOString(),
      name,
      userId,
    }

    localStorage.setItem("messages", JSON.stringify([...messages, msg]))
    window.dispatchEvent(new Event("storage"))
  }

  const initializeUser = useCallback((name: string) => {
    // Some random id to recognize whose message is showing
    const userId = Math.random().toFixed(3)
    setName(name)
    setUserId(userId)
    sessionStorage.setItem("name", name)
    sessionStorage.setItem("userId", userId)
  }, [])

  return (
    <StateMangerContext.Provider
      value={{ messages, sendMessage, name, initializeUser, userId, isInitialized }}
    >
      {children}
    </StateMangerContext.Provider>
  )
}

export function useGlobalState() {
  return useContext(StateMangerContext)
}
