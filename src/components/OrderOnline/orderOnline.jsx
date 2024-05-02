import "./orderOnline.css";
import underConstruction from '../../assets/underConstruction.jpg';

const OrderOnline = () => {
    return (
        <div className="container d-flex justify-content-center align-items-center flex-column p-3">
            <h1>Order Online</h1>
            <h2>This part is still...</h2>
            <img src={underConstruction} alt="" className="order-pic"/>
        </div>
    );
}

export default OrderOnline;