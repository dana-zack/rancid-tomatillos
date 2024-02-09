import './MoviePicker.css';
import PropTypes from 'prop-types';
import { useState } from 'react';

function MoviePicker({ movies }) {
  const [pickedMovie, setPickedMovie] = useState(null)
  
  const randomMovie = movies[(Math.floor(Math.random() * movies.length))]

  return (
    <>
      <h3>Can't decide what to watch?</h3>
      <button onClick={() => setPickedMovie(randomMovie)}>Let us pick!</button>
      { pickedMovie && 
        <article  className='movie-card'>
          <img src={pickedMovie.poster_path} alt='Movie Poster'/>
        </article> }
    </>
  )
}

export default MoviePicker;

MoviePicker.propTypes = {

}