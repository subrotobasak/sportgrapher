import Col from "react-bootstrap/Col";
import "../Service/Service.css"
import HoverButton from "../HoverButton/HoverButton";
import { Link } from "react-router-dom";

const Service = ({ item }) => {
    return (
        <Col lg={4}>
            <div className="single-service">
                <div className="single-service-image">
                    <img src={item.img} alt="" className="w-100" />
                </div>
                <div className="single-service-text">
                    <h3>{item.name}</h3>
                    <h4>Price: ${item.price}</h4>
                    <p>{item.description}</p>
                    <Link to = "/login"><HoverButton button="Book Now"/></Link> 
                </div>
            </div>
        </Col>
    );
};
export default Service;