import './MoviePicker.css';
import PropTypes from 'prop-types';
import { useState } from 'react';

function MoviePicker({ movies, error }) {
  const [pickedMovie, setPickedMovie] = useState(null)
  
  const randomMovie = movies[(Math.floor(Math.random() * movies.length))]

  return (
    <>
      <h3 className='decide-title'>Can't decide what to watch?</h3>
      <button className='picker-button' onClick={() => setPickedMovie(randomMovie)}>Let us pick!</button>
      { pickedMovie ? 
        <article  className='movie-card picked-movie'>
          <img src={pickedMovie.poster_path} alt='Movie Poster'/>
        </article> :
        <p>{error}</p>
      }
    </>
  )
}

export default MoviePicker;

MoviePicker.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
  error: PropTypes.string.isRequired
}