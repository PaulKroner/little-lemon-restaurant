import "./footer.css"
import restaurant from "../../assets/restaurant.jpg"

const Footer = () => {
  return (
    <div className="footer container-fluid">
      <h1 className="footer-heading d-flex justify-content-center align-items-center">Footer</h1>
      <div className="footer-wrapper d-flex justify-content-center">

        <img src={restaurant} alt="restaurant" className="image-box" />

        <div className="footer-items container d-flex flex-column justify-content-center">
          <h1 className="footer-items-heading d-flex justify-content-center">Contact</h1>
          <ul className="footer-items-content d-flex justify-content-center flex-column">
            <div class="d-flex justify-content-center">
              <li>Address</li>
            </div>
            <div class="d-flex justify-content-center">
              <li>Phone</li>
            </div>
            <div class="d-flex justify-content-center">
              <li>Contact</li>
            </div>
          </ul>
        </div>

        <div className="footer-items container d-flex flex-column justify-content-center">
          <h1 className="footer-items-heading d-flex justify-content-center">Social Media</h1>
          <ul className="footer-items-content d-flex justify-content-center flex-column">
            <div class="d-flex justify-content-center">
              <li>Instagram</li>
            </div>
            <div class="d-flex justify-content-center">
              <li>Facebook</li>
            </div>
            <div class="d-flex justify-content-center">
              <li>YouTube</li>
            </div>
          </ul>
        </div>

      </div>

    </div>
  );
};

export default Footer;