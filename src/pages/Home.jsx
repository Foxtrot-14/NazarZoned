import "./Home.css";
import hero from "../assets/img/sample.png";
import sec from "../assets/img/sample2.avif";
import sec1 from "../assets/img/sample3.avif";
const Home = () => {
  return (
    <div>
      <div className="main">
        <h1 className="title">नज़रZONED</h1>
        <img src={hero} className="hero" alt="hero" />
        <h2 className="two">Be Bold, Be You, Be Nazar Zoned</h2>
      </div>
      <div className="sec">
        <div className="con">
          <img src={sec} className="ima" alt="img" />
          <p className="para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod beatae
            quam dolor quo? Veritatis temporibus dolorum, libero, excepturi
            eligendi maiores reprehenderit sed labore iusto, ipsam incidunt
            animi aspernatur nemo laudantium!
          </p>
        </div>
        <div className="con">
          <p className="para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod beatae
            quam dolor quo? Veritatis temporibus dolorum, libero, excepturi
            eligendi maiores reprehenderit sed labore iusto, ipsam incidunt
            animi aspernatur nemo laudantium!
          </p>
          <img src={sec1} className="ima1" alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Home;
