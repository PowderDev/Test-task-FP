import ReactDOM from "react-dom/client"
import App from "./App"
import { StateManager } from "./contexts/StateManager"
import "./index.scss"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StateManager>
    <App />
  </StateManager>
)
