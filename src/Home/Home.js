import './Home.css';
import Carousel from '../Carousel/Carousel';
import MoviePicker from '../MoviePicker/MoviePicker';
import PropTypes from 'prop-types';

function Home({ movies, error }) {
  return (
    <>
      <Carousel />
      <MoviePicker movies={movies} error={error}/>
    </>
  )
}

export default Home;

Home.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
  error: PropTypes.string.isRequired
}