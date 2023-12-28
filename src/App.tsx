import * as React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import './App.css'

function App() {
  return (
    <div className="bg-hero-pattern overflow-scroll h-screen w-screen bg-cover bg-repeat overflow-y-scroll bg-center bg-opacity-50 py-5 px-8">
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/projects" element={<Projects />}></Route>
        <Route exact path="/about" element={<About />}></Route>
      </Routes>
    </div>
  )
}

export default App
