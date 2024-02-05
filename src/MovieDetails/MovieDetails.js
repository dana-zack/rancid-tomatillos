import './MovieDetails.css'
import YouTube from 'react-youtube';
import PropTypes from 'prop-types';

function MovieDetails({selectedMovie, selectedMovieVids}) {

  const accessTrailer = () => {
      if (typeof selectedMovieVids === 'string' || !selectedMovieVids) {
        // return selectedMovieVids
      } else {
        const trailer = selectedMovieVids.find(movie => movie.type === 'Trailer').key
        return trailer
      }
  }

  return (
    <section className='movie-details-container'>
      <hgroup className='backdrop'>
        <img src={selectedMovie.backdrop_path} alt="movie backdrop"></img>
        <section className="poster-and-title-container">
          <img className='poster' src={selectedMovie.poster_path} alt="movie backdrop"></img>
          <div className='title-and-tagline'>
            <h3>{selectedMovie.title}</h3>
            <p>{selectedMovie.tagline}</p>
          </div>
        </section>
      </hgroup>
      <article className='movie-text-content'>
        <div className='side-info'>
          <p>Runtime: {selectedMovie.runtime} minutes</p> 
          <p>{selectedMovie.genres.join(' | ')}</p>
          <p>Release date: {selectedMovie.release_date}</p>
          <p>Movie Rating: {selectedMovie.average_rating} ⭐️'s</p>
        </div>
        <p className="overview">{selectedMovie.overview}</p>
      </article>
      {
      accessTrailer() ? 
      <YouTube className='media' videoId={accessTrailer()}></YouTube> : 
      <p className="media">Unable to play trailer</p>
      }
    </section>
  )
}

export default MovieDetails;

MovieDetails.propTypes = {
  selectedMovie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    poster_path: PropTypes.string,
    backdrop_path: PropTypes.string,
    release_date: PropTypes.string,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string),
    budget: PropTypes.number,
    revenue: PropTypes.number,
    runtime: PropTypes.number,
    tagline: PropTypes.string,
    average_rating: PropTypes.number
  }),
  selectedMovieVids: PropTypes.arrayOf(PropTypes.object),
}