import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Banner1 from "../../../utilities/Banner/addb-1.jpg";
import Banner2 from "../../../utilities/Banner/addb-2.jpg";


const BrandCarousel = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Banner2}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Banner1}
                        alt="Second slide"
                    />

                </Carousel.Item>
            </Carousel>

        </div>
    );
};

export default BrandCarousel;