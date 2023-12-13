import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Nav from './components/Nav'
import FormLabel from './components/Pages/OmitLabel/FormLabel'
import ZulfahLandingPage from './components/Pages/Zulfah/ZulfahLandingPage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Navbar/> */}
      {/* <Nav/> */}
      {/* <div div className='bg-cyan-500 w-full h-screen'></div> */}
      {/* <FormLabel/> */}
      <ZulfahLandingPage/>
    </>
  )
}

export default App
