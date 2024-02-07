import './MovieCard.css'
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

function MovieCard({ poster, id }){

  return (
    <Link className='card' to={`/movies/${id}`} > 
      <article  className='movie-card'>
        <img src={poster} alt='Movie Poster'/>
      </article>
    </Link>
  )
}

export default MovieCard;

// MovieCard.propTypes = {
//   poster: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   rating: PropTypes.number.isRequired,
//   releaseDate: PropTypes.string.isRequired,
//   id: PropTypes.number.isRequired,
//   selectMovie: PropTypes.func.isRequired
// }
