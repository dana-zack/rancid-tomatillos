import { useState, useEffect } from 'react';
import movieData from './App-mock-data';
import './App.css';
import Movies from '../Movies/Movies.js'

function App() {
  const [movies, setMovies] = useState(movieData.movies);

  // console.log(movies)
  
  return (
    <main className="App">
      <h1>Rancid Tomatillos</h1>
      <Movies movies={movies}/>
    </main>
  );
}

export default App;


