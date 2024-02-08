import './Home.css';
import Carousel from '../Carousel/Carousel';
import MoviePicker from '../MoviePicker/MoviePicker';
import PropTypes from 'prop-types';

function Home({ movies }) {
  return (
    <>
      <Carousel />
      <MoviePicker movies={movies}/>
    </>
  )
}

export default Home;

Home.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object)
}