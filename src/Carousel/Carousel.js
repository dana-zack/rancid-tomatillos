import './Carousel.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import PropTypes from 'prop-types';

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true
  };

  return (
    <section className="carousel-container">
      <Slider {...settings}>
        <div>
          <h2>The Woman King</h2>
          <img src="https://image.tmdb.org/t/p/original//7zQJYV02yehWrQN6NjKsBorqUUS.jpg"></img>
        </div>
        <div>
          <h2>Black Adam</h2>
          <img src="https://image.tmdb.org/t/p/original//bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg"></img>
        </div>
        <div>
          <h2>Black Panther, Wakanda Forever</h2>
          <img src="https://image.tmdb.org/t/p/original//xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg"></img>
        </div>
        <div>
          <h2>All Quiet On The Western Front</h2>
          <img src="https://image.tmdb.org/t/p/original//mqsPyyeDCBAghXyjbw4TfEYwljw.jpg"></img>
        </div>
        <div>
          <h2>Puss In Boots</h2>
          <img src="https://image.tmdb.org/t/p/original//cP8YNG3XUeBmO8Jk7Skzq3vwHy1.jpg"></img>
        </div>
        <div>
          <h2>Smile</h2>
          <img src="https://image.tmdb.org/t/p/original//olPXihyFeeNvnaD6IOBltgIV1FU.jpg"></img>
        </div>
      </Slider>
    </section>
  )
}

export default Carousel;