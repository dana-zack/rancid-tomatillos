import './MovieDetails.css'
import YouTube from 'react-youtube';
// import PropTypes from 'prop-types';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { fetchSingleMovie, fetchSingleMovieVids } from '../apiCalls.js';

function MovieDetails({ error, setError }) {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedMovieVids, setSelectedMovieVids] = useState(null);
  const id = useParams().id
  
  useEffect(() => {
    
    const getSingleMovie = async () => {
      try {
        const details = await fetchSingleMovie(id);
        setSelectedMovie( details.movie );
      } catch (error) {
        setError(error)
      }
    }
  
    const getSingleMovieVids = async () => {
      try {
        const trailers = await fetchSingleMovieVids(id);
        setSelectedMovieVids( trailers.videos );
      } catch (error) {
        setError(error)
      }
    }
  
    getSingleMovieVids();    
    getSingleMovie();
  }, [id, setError])

  const accessTrailer = () => {
    if (typeof selectedMovieVids === 'string' || !selectedMovieVids || !selectedMovieVids.length) return;
    return selectedMovieVids.find(movie => movie.type === 'Trailer').key
  }

  if (!selectedMovie) {
    return (
      <p>{error.message}</p>
    )
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
          <p>Movie Rating: {selectedMovie.average_rating} / 10</p>
        </div>
        <p className="overview">{selectedMovie.overview}</p>
      </article>
      {
      accessTrailer() ? 
      <YouTube className='media' videoId={accessTrailer()}></YouTube> : 
      <p className="media">Sorry, failed to load media!</p>
      }
    </section>
  )
}

export default MovieDetails;

// MovieDetails.propTypes = {
//   selectedMovie: PropTypes.shape({
//     id: PropTypes.number,
//     title: PropTypes.string,
//     poster_path: PropTypes.string,
//     backdrop_path: PropTypes.string,
//     release_date: PropTypes.string,
//     overview: PropTypes.string,
//     genres: PropTypes.arrayOf(PropTypes.string),
//     budget: PropTypes.number,
//     revenue: PropTypes.number,
//     runtime: PropTypes.number,
//     tagline: PropTypes.string,
//     average_rating: PropTypes.number
//   }),
//   selectedMovieVids: PropTypes.arrayOf(PropTypes.object),
// }