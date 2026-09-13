import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./i18n/LanguageContext";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Domov from "./pages/Domov";
import ONas from "./pages/ONas";
import Galerija from "./pages/Galerija";
import StrokovnaZnanja from "./pages/StrokovnaZnanja";
import KampiInPrireditve from "./pages/KampiInPrireditve";
import Kontakt from "./pages/Kontakt";

function App() {
  return (
    <div className="App min-h-screen flex flex-col">
      <LanguageProvider>
        <BrowserRouter>
          <Navigation />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Domov />} />
              <Route path="/o-nas" element={<ONas />} />
              <Route path="/galerija" element={<Galerija />} />
              <Route path="/strokovna-znanja" element={<StrokovnaZnanja />} />
              <Route path="/kampi-in-prireditve" element={<KampiInPrireditve />} />
              <Route path="/kontakt" element={<Kontakt />} />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </LanguageProvider>
    </div>
  );
}

export default App;
