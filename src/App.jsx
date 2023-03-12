import './App.css'
import React, { useState, useEffect } from 'react'
import MiApi from './components/MiApi' 
import Buscador from './components/Buscador';

function App() {
  
  const [info, setInfo]=useState([]);
  const [buscador, setBuscador]=useState('')
    
useEffect(()=>{
    feriadosChile()
}, [])
    
  const feriadosChile= async() => {
  const url='https://api.victorsanmartin.com/feriados/en.json'
  const response= await fetch (url)
  const data= await response.json()
    setInfo(data.data)
  } 

  return (
    <div>
    <h1 className="container text-center mt-3">Feriados de Chile 2023</h1>
    <hr />
    <div className='image'>
    <img className='w-100 h-30'  src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/5c/38/15/torres-del-paine-national.jpg?w=1200&h=1200&s=1" alt="chile" />
    </div>
    <hr />
    <Buscador buscador={buscador} setBuscador={setBuscador}/> 
    <MiApi info={info} buscador={buscador}/>
    </div>
  )
}

export default App
