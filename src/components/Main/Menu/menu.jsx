import Header from "../../Header/header";
import "./menu.css";
import greeksalad from "../../../assets/greekSalad.jpg";
import bruchetta from "../../../assets/bruchetta.svg";
import lemonDessert from "../../../assets/lemonDessert.jpg";


const Menu = () => {
    return (
        <div className="container-fluid d-flex flex-column p-5">
            {/* <h1>Menu</h1> */}
            {/* <Header title="test" buttonText="klick" /> */}

            <div className="order-online-header d-flex justify-content-between mb-3 gap-3">
                <span className="specials">This week specials</span>
                <button type="button" className="order-online-button">Online Menu</button>
            </div>

            <div className="d-flex flex-wrap justify-content-between align-items-center p-1 gap-4">

                <div className="meal-card container d-flex flex-column p-3">
                    <img className="meal-img" src={greeksalad} alt="" />
                    <span className="">
                        <div className="d-flex flex-row justify-content-between">
                            <div className="meal-header display-2">Greek Salad</div>
                            <div className="meal-price display-2">12,99€</div>
                        </div>
                        <p className="meal-content display-6">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                            sed diam nonumy eirmod tempor invidunt ut labore et dolore
                            magna aliquyam erat</p>
                        <button className="meal-button">Order delivery</button>
                    </span>

                </div>

                <div className="meal-card container d-flex flex-column p-3">
                    <img className="meal-img" src={bruchetta} alt="" />
                    <span className="">
                        <div className="d-flex flex-row justify-content-between">
                            <div className="meal-header display-2">Bruchetta</div>
                            <div className="meal-price display-2">4,99€</div>
                        </div>
                        <p className="meal-content display-6">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                            sed diam nonumy eirmod tempor invidunt ut labore et dolore
                            magna aliquyam erat</p>
                        <button className="meal-button">Order delivery</button>
                    </span>
                </div>

                <div className="meal-card container d-flex flex-column p-3">
                    <img className="meal-img" src={lemonDessert} alt="" />
                    <span className="">
                        <div className="d-flex flex-row justify-content-between">
                            <div className="meal-header display-2">Lemon Dessert</div>
                            <div className="meal-price display-2">2,99€</div>
                        </div>
                        <p className="meal-content display-6">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                            sed diam nonumy eirmod tempor invidunt ut labore et dolore
                            magna aliquyam erat</p>
                        <button className="meal-button">Order delivery</button>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Menu;