import './App.css';
import { useState, useEffect } from 'react';
import { getMovies } from '../apiCalls.js'
import Movies from '../Movies/Movies.js'

function App() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('')
  
  // useEffect(() => {
  //   getMovies()
  //     .then(movieData => {
  //       setMovies(movieData.movies)
  //     })
  //     .catch(error => {
  //       setError(error)
  //     })
  // }, [])

  useEffect(() => {
    const getData = async () => {
      try {
        const movieData = await getMovies();
        setMovies(movieData.movies);
      } catch (error) {
        setError(error)
      }
    }
    getData();
  }, [])
  
  return (
    <main className="App">
      <h1>Rancid Tomatillos</h1>
      <Movies movies={movies}/>
    </main>
  );
}

export default App;


