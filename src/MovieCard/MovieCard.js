import './MovieCard.css'

function MovieCard({ poster, title, rating, releaseDate, id, selectMovie }){

  return (
    <article onClick={() => selectMovie(id)} className='movie-card'>
      <h3>{title}</h3>
      <img src={poster} alt='Movie Poster'/>
      <p>{Math.round(rating)}</p>
      <p>{releaseDate.slice(0, 4)}</p>
    </article>
  )
}

export default MovieCard;
