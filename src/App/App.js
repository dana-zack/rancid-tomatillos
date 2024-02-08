import './App.css';
import { useState, useEffect } from 'react';
import { fetchMovies } from '../apiCalls.js';
import Movies from '../Movies/Movies.js';
import MovieDetails from '../MovieDetails/MovieDetails.js';
import Home from '../Home/Home'
import NotFound from '../NotFound/NotFound'
import { Routes, Route, NavLink } from 'react-router-dom'

function App() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState({});

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
        <Route path='/home' element={ <Home movies={movies}/> } />
        <Route path='/movies' element={<Movies movies={movies} error={error} />} />
        <Route path='/movies/:id' element={ <MovieDetails error={error} setError={setError}/> } />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <footer></footer>
    </main>
  );
}

export default App;


