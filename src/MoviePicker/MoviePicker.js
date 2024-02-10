import './MoviePicker.css';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

function MoviePicker({ movies, error }) {
  const [pickedMovie, setPickedMovie] = useState(null)
  const randomMovie = movies[(Math.floor(Math.random() * movies.length))]

  useEffect(() => {
    setPickedMovie(randomMovie)
  }, [movies])

  return (
    <section className='movie-picker-container'>
      <h3 className='decide-title'>Can't decide what to watch?</h3>
      <button className='picker-button' onClick={() => setPickedMovie(randomMovie)}>Let us pick!</button>
      { pickedMovie ? 
        <Link className='card' to={`/movies/${pickedMovie.id}`} >
          <article  className='movie-card picked-movie'>
            <img src={pickedMovie.poster_path} alt='Movie Poster'/>
          </article> 
        </Link> :
        <p>{error}</p> }
    </section>
  )
}

export default MoviePicker;

MoviePicker.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
  error: PropTypes.string.isRequired
}