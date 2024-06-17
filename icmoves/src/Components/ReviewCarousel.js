import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ReviewCarousel.css';

function ReviewCarousel({ reviews }) {
    const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <Slider {...settings}>
            {reviews.map((review, index) => (
                <div key={index} className="review-container">
                    <div className="review">
                        <h3>{review.name}</h3>
                        <p>{review.comment}</p>
                    </div>
                </div>
            ))}
        </Slider>
    );
}

export default ReviewCarousel;