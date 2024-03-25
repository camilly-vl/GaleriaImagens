import './App.css'
import FotoAmpliada from './components/FotoAmpliada'
import FotoList from './components/FotoList'
import SearchBar from './components/SearchBar'

import {useState, useEffect} from 'react'

function App() {

  return (
    <div className='container'>
      <SearchBar/>
      <FotoList/>
      <FotoAmpliada/>
    </div>
  )
}

export default App
