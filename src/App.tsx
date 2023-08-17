import * as React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/header/Header"
import Home from "./pages/Home"
import Blog from "./pages/Blog"
import About from "./pages/About"
import './App.css'

function App() {
  return (
    <div className="bg-hero-pattern w-screen h-screen bg-cover bg-center bg-opacity-50 py-5 px-8">
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/" element={<Blog />}></Route>
        <Route exact path="/" element={<About />}></Route>
      </Routes>
    </div>
  )
}

export default App
