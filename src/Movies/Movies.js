import MovieCard from '../MovieCard/MovieCard'
import './Movies.css'

function Movies({ movies }){

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

  //     "id": 694919,
  //     "poster_path": "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
  //     "backdrop_path": "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
  //     "title": "Money Plane",
  //     "average_rating": 6.666666666666667,
  //     "release_date": "2020-09-29"

  return (
    <section className="movie-cards-container">
      { movieCards }
    </section>
  )
}

export default Movies;