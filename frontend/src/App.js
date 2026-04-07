import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Domov from "./pages/Domov";
import ONas from "./pages/ONas";
import Galerija from "./pages/Galerija";
import Kontakt from "./pages/Kontakt";

function App() {
  return (
    <div className="App min-h-screen flex flex-col">
      <BrowserRouter>
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Domov />} />
            <Route path="/o-nas" element={<ONas />} />
            <Route path="/galerija" element={<Galerija />} />
            <Route path="/kontakt" element={<Kontakt />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
