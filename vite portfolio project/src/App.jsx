import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Projects from './Components/Projects/Projects'
import Technologies from './Components/Technologies/Technologies'
import Acomlishment from './Components/Acomplisments/Acomlishment'
import Timeline from './Components/Timeline/Timeline'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Projects />
      <Technologies />
      <Timeline />
      <Acomlishment />
      <Footer />

    </>
  )
}

export default App
