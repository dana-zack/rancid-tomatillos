import './MovieCard.css'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

function MovieCard({ poster, title, rating, releaseDate, id, selectMovie }){

  return (
    <Link to={`/movies/${id}`} onClick={() => selectMovie(id)}> 
      <article  className='movie-card'>
        <h3>{title}</h3>
        <img src={poster} alt='Movie Poster'/>
        <p>{Math.round(rating)}</p>
        <p>{releaseDate.slice(0, 4)}</p>
      </article>
    </Link>
  )
}

export default MovieCard;

MovieCard.propTypes = {
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  releaseDate: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  selectMovie: PropTypes.func.isRequired
}
