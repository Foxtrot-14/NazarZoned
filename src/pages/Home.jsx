import "./Home.css";
import hero from "../assets/img/sample.png";
import vid from "../assets/vid/video.webm";
const Home = () => {
  return (
    <div>
      <div className="scene1">
        <div className="cen">
          <video src={vid} autoPlay loop muted className="vid"></video>
          <h1 className="title">
            <span className="naz">नज़र</span>
            <span className="zon">ZONED</span>
          </h1>
          <a href="/shop" className="click">
            Shop Now
          </a>
          <h2 className="sub">Elevate Your Wardrobe with NAZAR ZONED</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
