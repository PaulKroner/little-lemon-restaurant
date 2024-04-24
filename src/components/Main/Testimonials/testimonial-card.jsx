import "../Testimonials/testimonials.css";
import customer1 from "../../../assets/customer1.jpg"
import customer2 from "../../../assets/customer2.jpg"
import customer3 from "../../../assets/customer3.jpg"
import customer4 from "../../../assets/customer4.jpg"
import Rating from 'react-rating-stars-component';

const TestimonialCard = ({ customer }) => {
    return (
        <div className="testi-card d-flex flex-column p-3">
            <div className="d-flex justify-content-center">
                <img className="customer-img" src={customer.image} alt="" />
            </div>
            <span className="card-name d-flex justify-content-center">{customer.fullName}</span>
            <Rating
            size={30}
            value={customer.rating[0]}
            edit={false}
          />
            <p className="card-paragraph">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                sed diam nonumy eirmod tempor invidunt ut labore et dolore
                magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                et justo duo dolores et ea
            </p>
        </div>
    )

};

export default TestimonialCard;