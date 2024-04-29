import FotoAmpliada from './components/FotoAmpliada'
import FotoList from './components/FotoList'
import SearchBar from './components/SearchBar'

import {useState, useEffect} from 'react'

import axios from 'axios';

function App() {
  const [query, setQuery] = useState('');
  const [categoria, setCategoria] = useState('');
  const [fotos, setFotos] = useState([]);
  const [fotoAmpliada, setFotoAmpliada] = useState(null);

  const fetchData = async ({ query, categoria }) => {
    const apikey = import.meta.env.VITE_UNSPLASH_API_KEY;
    const response = await axios.get('https://api.unsplash.com/photos/random', {
      params: {
        client_id: apikey,
        count: 10,
      },
    });

    setFotos(response.data);

    console.log(response.data);
  };

  useEffect(() => {
    fetchData(query, categoria);
  }, [])

  return (
    <div className='container'>
      <SearchBar/>
      <FotoList fotos={fotos} setFotoAmpliada={setFotoAmpliada}/>
      <FotoAmpliada foto={fotoAmpliada} setFotoAmpliada={setFotoAmpliada}/>
    </div>
  )
}

export default App
