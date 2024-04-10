import "./footer.css"
import restaurant from "../../assets/restaurant.jpg"

const Footer = () => {
  return (
    <header className="footer">
      <h1 className="footer-heading">Footer</h1>
      <div className="footer-wrapper">

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

    </header>
  );
};

export default Footer;