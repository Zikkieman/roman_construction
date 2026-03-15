import { ArchitectureHomePage } from './pages/ArchitectureHomePage'
import { ContactPage } from './pages/ContactPage'

function App() {
  const pathname = window.location.pathname

  if (pathname === '/contact') {
    return <ContactPage />
  }

  return <ArchitectureHomePage />
}

export default App
