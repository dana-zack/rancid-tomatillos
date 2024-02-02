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
      <p>{selectedMovie.overview}</p>
      <p>{selectedMovie.genres}</p>
      <p>${selectedMovie.budget}</p> 
      <p>${selectedMovie.revenue}</p> 
      <p>{selectedMovie.runtime} minutes</p> 
      <p>{selectedMovie.tagline}</p> 
    </>
  )
}

export default MovieDetails;