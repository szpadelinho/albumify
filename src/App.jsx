import './App.css'
import { useState } from 'react'
import Header from "./Header.jsx"
import Body from "./Body.jsx"
import Footer from "./Footer.jsx"
import Search from "./Search.jsx"

function App() {

  const [isVisibleBody, setVisibleBody] = useState(false)
  const [isVisibleSearch, setVisibleSearch] = useState(true)

  return (
    <main>
      <Header/>
      {isVisibleBody && <Body/>}
      {isVisibleSearch && <Search/>}
      <Footer/>
    </main>
  )
}

export default App
