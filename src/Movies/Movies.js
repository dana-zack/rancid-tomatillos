import MovieCard from '../MovieCard/MovieCard'
import './Movies.css'
import PropTypes from 'prop-types';

function Movies({ movies, error }){


  const movieCards = movies.map(movie => {
    return (
      <MovieCard 
        poster={movie.poster_path}
        title={movie.title}
        rating={movie.average_rating}
        releaseDate={movie.release_date}
        id={movie.id}
        key={movie.id}
      />
    )
  })

  return (
    <section className="movie-cards-container">
      { !movies.length ? <p>{error}</p> : movieCards }
    </section>
  )
}

export default Movies;

Movies.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
  error: PropTypes.string.isRequired
}