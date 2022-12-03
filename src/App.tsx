import { useEffect, useMemo } from "react"
import Chat from "./components/Chat"
import Header from "./components/Header"
import StartModal from "./components/StartModal"
import { useGlobalState } from "./contexts/StateManager"

function App() {
  const { name, userId, isInitialized } = useGlobalState()

  return (
    <main className="root">
      <Header />
      <Chat />
      <StartModal isOpen={!isInitialized} />
    </main>
  )
}

export default App
