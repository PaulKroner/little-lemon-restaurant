import "./footer.css"
import restaurant from "../../assets/restaurant.jpg"

const Footer = () => {
  return (
    <div className="footer container-fluid">
      <h1 className="footer-heading d-flex justify-content-center align-items-center">Footer</h1>
      <div className="footer-wrapper d-flex justify-content-center">

        <img src={restaurant} alt="restaurant" className="image-box" />

        <div className="footer-items">
          <h1 className="footer-items-heading">Contact</h1>
          <ul className="footer-items-content">
            <li>Address</li>
            <li>Phone</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-items">
          <h1 className="footer-items-heading">Social Media</h1>
          <ul className="footer-items-content">
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Youtube</li>
          </ul>
        </div>

      </div>

    </div>
  );
};

export default Footer;