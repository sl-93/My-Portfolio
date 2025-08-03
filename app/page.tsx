'use client'
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import About from "./components/About"
import Hobbies from "./components/Hobbies"
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'


export default function Home() {
  return (
    <>
    <Navbar />
    <Header />
    <About />
    <Achievements />
    <Hobbies />
    <Contact />
    <Footer />
    </>
  )
}
