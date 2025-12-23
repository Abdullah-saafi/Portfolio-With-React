import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AboutMePage from "../pages/AboutMePage";
import MyWork from "../components/MyWork";

const AppRotes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-me" element={<AboutMePage />}></Route>
      <Route path="/works" element={<MyWork />}></Route>
    </Routes>
  );
};

export default AppRotes;
