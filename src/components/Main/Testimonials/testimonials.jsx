import "./testimonials.css"
import TestimonialCard from "./testimonial-card";
import customer1 from "../../../assets/customer1.jpg"
import customer2 from "../../../assets/customer2.jpg"
import customer3 from "../../../assets/customer3.jpg"
import customer4 from "../../../assets/customer4.jpg"

const customers = [
    {
      fullName: 'Maria Sanchez',
      image: customer1,
      rating: [5, 5],
      says: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
        eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
      fullName: 'Antony Clifton',
      image: customer2,
      rating: [4, 5],
      says: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
        eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
      fullName: 'Tamika Jackson',
      image: customer3,
      rating: [5, 5],
      says: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
        eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
      fullName: 'Brandon Ming',
      image: customer4,
      rating: [3, 5],
      says: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
        eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
  ];

const Testimonials = () => {
    return (
        <div className="container-fluid testimonials-layout d-flex flex-column p-3 pb-5">
            <h1 className="testimonials-heading ms-2">What people say about us</h1>
            <div className="d-flex justify-content-evenly flex-row flex-wrap gap-4">
                
            {customers.map((customer, index) => (
                <TestimonialCard key={index} customer={customer} />
            ))}


            </div>
        </div>
    );
};

export default Testimonials;