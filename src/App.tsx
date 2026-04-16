import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { PageLoader } from "./components/common/PageLoader";
import { AboutPage } from "./pages/AboutPage";
import { ArchitectureHomePage } from "./pages/ArchitectureHomePage";
import { ContactPage } from "./pages/ContactPage";
import { GalleryPage } from "./pages/GalleryPage";
import { ServiceGalleryPage } from "./pages/ServiceGalleryPage";
import { ServicesPage } from "./pages/ServicesPage";

function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);

      requestAnimationFrame(() => {
        const target = document.getElementById(id);

        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }

        window.scrollTo({ top: 0, behavior: "smooth" });
      });

      return;
    }

    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname, location.hash]);

  return null;
}

function App() {
  const [showLoader, setShowLoader] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    return sessionStorage.getItem("roman-loader-seen") !== "true";
  });
  const [isLoaderExiting, setIsLoaderExiting] = useState(false);

  useEffect(() => {
    if (!showLoader) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    let hasStartedExit = false;
    let canExit = false;
    let pageReady = document.readyState === "complete";
    let exitTimer = 0;

    const beginExit = () => {
      if (hasStartedExit) {
        return;
      }

      hasStartedExit = true;
      setIsLoaderExiting(true);
      sessionStorage.setItem("roman-loader-seen", "true");

      exitTimer = window.setTimeout(() => {
        setShowLoader(false);
      }, 900);
    };

    const minimumDelayTimer = window.setTimeout(() => {
      canExit = true;

      if (pageReady) {
        beginExit();
      }
    }, 5000);

    const onWindowLoad = () => {
      pageReady = true;

      if (canExit) {
        beginExit();
      }
    };

    if (document.readyState === "complete") {
      pageReady = true;
    } else {
      window.addEventListener("load", onWindowLoad, { once: true });
    }

    return () => {
      document.body.style.overflow = previousOverflow;
      window.clearTimeout(minimumDelayTimer);
      window.clearTimeout(exitTimer);
      window.removeEventListener("load", onWindowLoad);
    };
  }, [showLoader]);

  useEffect(() => {
    if (!showLoader) {
      document.body.style.overflow = "";
    }
  }, [showLoader]);

  return (
    <>
      {showLoader ? <PageLoader isExiting={isLoaderExiting} /> : null}
      <ScrollManager />
      <Routes>
        <Route path="/" element={<ArchitectureHomePage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:serviceSlug" element={<ServiceGalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;
