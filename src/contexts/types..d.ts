export interface GlobalStateManager {
  name: string
  userId: string
  isInitialized: boolean
  messages: Message[]
  sendMessage: (content: string) => void
  initializeUser: (name: string) => void
}

export interface Message {
  id: number
  name: string
  content: string
  date: string
  userId: string
}
