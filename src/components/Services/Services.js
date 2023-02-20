import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Service from "../Service/Service"
import "../Services/Services.css";
import SectionHeading from "../SectionHeading/SectionHeading";
import { useEffect, useState } from "react";

const Services = () => {
    const [services, setService] = useState([]);
    useEffect(() => {
        fetch("services.json")
            .then((res) => res.json())
            .then((data) => setService(data));
    }, []);
    return (
        <section className="services-area">
            <Container>
                <SectionHeading heading="My Services" />
                <Row>
                    {
                        services.map((item) => <Service
                            key={item.id} item={item}></Service>)
                    }
                </Row>
                
            </Container>
        </section>
        
    );
};
export default Services;