import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { ArchitectureHomePage } from './pages/ArchitectureHomePage'
import { ContactPage } from './pages/ContactPage'
import { GalleryPage } from './pages/GalleryPage'
import { ServicesPage } from './pages/ServicesPage'

function ScrollManager() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1)

      requestAnimationFrame(() => {
        const target = document.getElementById(id)

        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' })
          return
        }

        window.scrollTo({ top: 0, behavior: 'smooth' })
      })

      return
    }

    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [location.pathname, location.hash])

  return null
}

function App() {
  return (
    <>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<ArchitectureHomePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  )
}

export default App
