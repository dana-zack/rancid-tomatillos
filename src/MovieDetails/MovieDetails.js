import './MovieDetails.css'

function MovieDetails({selectedMovie}) {

  console.log(selectedMovie)
  
  return (
    <>
      <h3>{selectedMovie.title}</h3>
      <img src={selectedMovie.backdrop_path} alt="movie backdrop"></img>
      <img src={selectedMovie.poster_path} alt="movie backdrop"></img>
      <p>{selectedMovie.average_rating}</p>
      <p>{selectedMovie.release_date}</p>
      <p>Here is a beautifully written synopsis for a mediocre film.</p> 
    </>
  )
}

// overview, genres, budget, revenue, runtime, tagline

export default MovieDetails;