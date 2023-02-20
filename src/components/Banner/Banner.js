import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import "../Banner/Banner.css"
import HoverButton from '../HoverButton/HoverButton';
const Banner = () => {
    const [slider, setSlider] = useState([]);
    useEffect(() => {
        fetch("hero.json")
            .then((res) => res.json())
            .then((data) => setSlider(data));
    })

    return (

        <div className="banner-area">

            <Carousel>
                {slider.map((item) => (
                    
                    <Carousel.Item key={item.id}>
                        
                        <img
                            className="d-block w-100"
                            src={item.img}
                            alt="First slide"
                        />
                        <Carousel.Caption>

                            <h3>{item.subheading}</h3>
                            <h2>{item.heading}</h2>
                            <p>{item.text}</p>
                            <Link to="/about"><HoverButton button="More About Me" /></Link>
                        </Carousel.Caption>
                    </Carousel.Item>

                ))}
            </Carousel>
        </div>);

};

export default Banner;