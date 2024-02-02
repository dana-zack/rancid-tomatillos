import MovieCard from '../MovieCard/MovieCard'
import './Movies.css'

function Movies({ movies, selectMovie }){

  const movieCards = movies.map(movie => {
    return (
      <MovieCard 
        poster={movie.poster_path}
        title={movie.title}
        rating={movie.average_rating}
        releaseDate={movie.release_date}
        id={movie.id}
        key={movie.id}
        selectMovie={selectMovie}
      />
    )
  })

  return (
    <section className="movie-cards-container">
      { movieCards }
    </section>
  )
}

export default Movies;