import './App.css';
import { useState, useEffect } from 'react';
import { fetchMovies, fetchSingleMovie, fetchSingleMovieVids } from '../apiCalls.js';
import Movies from '../Movies/Movies.js';
import MovieDetails from '../MovieDetails/MovieDetails.js';
import Home from '../Home/Home'
import NotFound from '../NotFound/NotFound'
import { Routes, Route, NavLink } from 'react-router-dom'

function App() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedMovieVids, setSelectedMovieVids] = useState(null);

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
    setSelectedMovieVids('null')
    const getSingleMovie = async () => {
      try {
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
        setError(error)
      }
    }
    getSingleMovieVids();    
    getSingleMovie();
  }

  return (
    <main className="App">
      <header>
        <h1>RANCID TOMATILLOS</h1>
        <nav>
          <NavLink to='/home' id="nav-home" className='nav'>Home</NavLink>
          <NavLink to='/movies' id="nav-movies" className='nav'>All Movies</NavLink>
        </nav>
      </header>
      <Routes>
        <Route path='/home' element={ <Home setSelectedMovie={setSelectedMovie} /> } />
        <Route path='/movies' element={ movies.length ?
          <Movies 
            setSelectedMovie={setSelectedMovie} 
            selectMovie={selectMovie} 
            movies={movies} error={error} 
          /> :
          <NotFound error={error}/> } />
        <Route path='/movies/:id' element={selectedMovie ? 
          <MovieDetails 
            selectedMovie={selectedMovie} 
            selectedMovieVids={selectedMovieVids} 
            error={error} 
          /> : 
          <NotFound error={error}/> } />
      </Routes>
      <footer></footer>
    </main>
  );
}

export default App;


