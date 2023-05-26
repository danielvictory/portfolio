// PedroTech Responsive Navbar In React With Styled Components Tutorial
// https://www.youtube.com/watch?v=1yMrdBsep-A
// https://github.com/machadop1407/styled-components-responsive-navbar
// Unicode: https://www.compart.com/en/unicode/

import './App.css';
// import { BrowserRouter as Router } from "react-router-dom" // , Routes, Route

// components
import Header from "./components/Header"
import Hero from "./components/Hero"
import Skills from "./components/Skills"

function App() {
  return (
      <div>
        <Header />
        <Hero />
        <Skills />
      </div>
  );
}

export default App;
