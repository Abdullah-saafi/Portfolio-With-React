import { Routes, Route } from "react-router-dom";
import DefaultLayout from "./components/Layout"
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import AboutMePage from "./pages/AboutMePage";
import MyWorks from "./pages/MyWorks";


function App() {
  return (
    <DefaultLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about-me" element={<AboutMePage />} />
        <Route path="/works" element={<MyWorks />} />


      </Routes>
    </DefaultLayout>
  )
}

export default App
