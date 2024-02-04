import './App.css';
import { useState, useEffect } from 'react';
import { fetchMovies, fetchSingleMovie, fetchSingleMovieVids } from '../apiCalls.js'
import Movies from '../Movies/Movies.js'
import MovieDetails from '../MovieDetails/MovieDetails.js'

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedMovieVids, setSelectedMovieVids] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const getMovies = async () => {
      try {
        const movieData = await fetchMovies();
        setMovies(movieData.movies);
      } catch (error) {
        setError(error)
      }
    }
    getMovies();
  }, [])

  function selectMovie(id) {
    const getSingleMovie = async () => {
      try {
        // const trailers = await fetchSingleMovieTrailer(id);
        const details = await fetchSingleMovie(id);
        setSelectedMovie( details.movie );
      } catch (error) {
        setError(error)
      }
    }
    const getSingleMovieVids = async () => {
      try {
        const trailers = await fetchSingleMovieVids(id);
        setSelectedMovieVids( trailers.videos );
      } catch (error) {
        console.log(error);
      }
    }
    getSingleMovie();
    getSingleMovieVids();    
  }
  
  return (
    <main className="App">
      <h1>Rancid Tomatillos</h1>
      <button className="home-button" onClick={() => setSelectedMovie(null)}>Home</button>
      { error && <p>Sorry, come back later!</p> }
      { 
      selectedMovie ? 
      <MovieDetails selectedMovie={ selectedMovie } selectedMovieVids={selectedMovieVids} /> : 
      <Movies movies={movies} selectMovie={ selectMovie }/> 
      }
      
    </main>
  );
}

export default App;


