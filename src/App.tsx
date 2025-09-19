import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import TodoApp from "./components/TodoMiniApp";
import Footer from "./components/footer";
import TodoPage from "./components/pages/TodoPage";
import QuizApp from "./components/quizApp";

import MultiStepForm from "./components/multiStepPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<TodoApp />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/Todopage" element={<TodoPage />} />
        <Route path="/QuizApp" element={<QuizApp />} />
        <Route path="/MultiStepForm" element={<MultiStepForm />} />
      </Routes>
    </Router>
  );
}

export default App;
