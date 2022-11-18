import './Banner.css';
import '../fonts/the-godfather/TheGodfather-v2.ttf';
import images from '../assets/hand.png';

function Banner() {
    return (
      <div className="MainBanner">
        <h2>The  MemeFather</h2>
        <div className="Logo">
        <img src={images} alt="logo"/>
        </div>
      </div>
    );
  }

  export default Banner;