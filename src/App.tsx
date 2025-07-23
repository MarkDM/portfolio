import "./App.css"
import React, { useState } from 'react'
import LoadingScreen from "./components/LoadingScreen"
import Navbar from "./components/Navbar";
import MobileMenu from "./components/MobileMenu";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import RevealOnScroll from "./components/RevealOnScroll";
import Contact from "./components/sections/Contact";

function App() {

  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      {
        loading && <LoadingScreen onComplete={() => setLoading(false)} />
      }
      <div className={`min-h-screen bg-black text-gray-100 transition-opacity duration-700 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <RevealOnScroll>
          <Home next_section="#about" />
        </RevealOnScroll>
        <RevealOnScroll>
          <About next_section="#projects" />
        </RevealOnScroll>
        <RevealOnScroll>
          <Projects next_section="#contact" />
        </RevealOnScroll>

        <RevealOnScroll>
          <Contact />
        </RevealOnScroll>

      </div>
    </div>
  )
}

export default App
