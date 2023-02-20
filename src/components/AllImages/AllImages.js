import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { useEffect, useState } from "react";
import SingleImage from "../SingleImage/SingleImage";



const AllImages = () => {
    const [images, setImages] = useState([]);
    useEffect(() => {
        fetch("galleries.json")
            .then((res) => res.json())
            .then((data) => setImages(data));
    }, []);
    return (
        <Container>
            <Row>
                {images.map((item => <SingleImage key={item.id} item={item}></SingleImage>))}

            </Row>
        </Container>
    );
};

export default AllImages;