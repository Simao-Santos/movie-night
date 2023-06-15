import React, { useEffect, useState } from 'react'
import Navbar from "./components/Navbar"
import MovieOptions from "./pages/MovieOptions"
import OptionsGenerator from "./pages/OptionsGenerator"

function App() {

  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])

  return (
    <>
      <Navbar></Navbar>
      {/* <OptionsGenerator></OptionsGenerator> */}


      <br></br>
      <br></br>
      <br></br>
      <br></br>
      {(typeof backendData.users === 'undefined') ? (
        <p>loading...</p>
      ) : (
        backendData.users.map((user, i) => (
          <p key={i}>{user}</p>
        ))
      )}


      <MovieOptions></MovieOptions>
    </>
  )
}

export default App
