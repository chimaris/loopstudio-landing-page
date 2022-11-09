import { Heading } from '@chakra-ui/react'
import Header from './components/Header/Header'
import './App.css'
import Leader from './components/Sections/Leader'
import Creations from './components/Sections/Creations'
import Footer from './components/Sections/Footer'

function App() {

  return (
    <div className="App">
      <Header />
      <Leader />
      <Creations />
      <Footer />
    </div>
  )
}

export default App
