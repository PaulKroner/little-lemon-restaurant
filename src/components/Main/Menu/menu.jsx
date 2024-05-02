import Header from "../../Header/header";
import "./menu.css";
import greeksalad from "../../../assets/greekSalad.jpg";
import bruchetta from "../../../assets/bruchetta.svg";
import lemonDessert from "../../../assets/lemonDessert.jpg";
import { useNavigate } from "react-router-dom";


const Menu = () => {

    const navigate = useNavigate();

    const orderOnline = () => {
      navigate('/orderonline');
    }

    return (
        <div className="container-fluid d-flex flex-column p-3">
            {/* <h1>Menu</h1> */}
            {/* <Header title="test" buttonText="klick" /> */}

            <div className="order-online-header d-flex justify-content-center mb-3">
                <span className="specials">This week specials</span>
                {/* <button type="button" className="order-online-button">Online Menu</button> */}
            </div>

            <div className="d-flex flex-wrap justify-content-center align-items-center p-1 gap-4">

                <div className="meal-card d-flex flex-column p-3">
                    <img className="meal-img" src={greeksalad} alt="" />
                    <span className="">
                        <div className="d-flex flex-row justify-content-between">
                            <div className="meal-header">Greek Salad</div>
                            <div className="meal-price">12,99€</div>
                        </div>
                        <p className="meal-content">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                            sed diam nonumy eirmod tempor invidunt ut labore et dolore
                            magna aliquyam erat</p>
                        <div className="d-flex justify-content-center">
                            <button className="meal-button" onClick={orderOnline}>Order delivery</button>
                        </div>
                    </span>

                </div>

                <div className="meal-card d-flex flex-column p-3">
                    <img className="meal-img" src={bruchetta} alt="" />
                    <span className="">
                        <div className="d-flex flex-row justify-content-between">
                            <div className="meal-header">Bruchetta</div>
                            <div className="meal-price">4,99€</div>
                        </div>
                        <p className="meal-content">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                            sed diam nonumy eirmod tempor invidunt ut labore et dolore
                            magna aliquyam erat</p>
                        <div className="d-flex justify-content-center">
                            <button className="meal-button" onClick={orderOnline}>Order delivery</button>
                        </div>
                    </span>
                </div>

                <div className="meal-card d-flex flex-column p-3">
                    <img className="meal-img" src={lemonDessert} alt="" />
                    <span className="">
                        <div className="d-flex flex-row justify-content-between">
                            <div className="meal-header">Lemon Dessert</div>
                            <div className="meal-price">2,99€</div>
                        </div>
                        <p className="meal-content">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                            sed diam nonumy eirmod tempor invidun
                           </p>
                        <div className="d-flex justify-content-center">
                            <button className="meal-button" onClick={orderOnline}>Order delivery</button>
                        </div>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Menu;