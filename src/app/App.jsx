import Router from "./Router";
import { AuthProvider } from "../context/AuthContext";
import { QAProvider } from "../context/QAContext";

function App() {

  return (
    <>
      <AuthProvider>
        <QAProvider>
          <Router />
        </QAProvider>
      </AuthProvider>
    </>
  )
}

export default App
