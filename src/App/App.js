import './App.css';
import { useState, useEffect } from 'react';
import { getMovies } from '../apiCalls.js'
import Movies from '../Movies/Movies.js'
import MovieDetails from '../MovieDetails/MovieDetails.js'

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [error, setError] = useState('');

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

  function selectMovie(id) {
    const selectedMovie = movies.find(movie => movie.id === id)
    setSelectedMovie(selectedMovie)
  }
  
  return (
    <main className="App">
      <h1>Rancid Tomatillos</h1>
      <button className="home-button" onClick={() => setSelectedMovie(null)}>Home</button>
      { error && <p>Sorry, come back later!</p> }
      { 
      selectedMovie ? 
      <MovieDetails selectedMovie={selectedMovie} /> : 
      <Movies movies={movies} selectMovie={ selectMovie }/> 
      }
      
    </main>
  );
}

export default App;


