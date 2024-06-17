import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function PCarousel2() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Adjust the number of slides shown at a time
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        <div className="property-box">
          <Link to="/PP" className="flex flex-col flex-1 text-black rounded-md border border-solid border-black border-opacity-10 p-4">
            <div className="flex flex-col pb-4 text-xs bg-black bg-opacity-10 h-[180px]">
              <div className="mt-4 leading-4 text-center">
                Your next door neighbours house
              </div>
            </div>
            <div className="flex flex-col mt-4">
              <div className="text-xs leading-4">Villa Tropicana</div>
              <div className="mt-1 text-base font-medium leading-6 text-ellipsis">
                Bedrooms: 2 | Bathrooms: 1
              </div>
            </div>
          </Link>
        </div>
        <div className="property-box">
          <Link to="/PP" className="flex flex-col flex-1 text-black rounded-md border border-solid border-black border-opacity-10 p-4">
            <div className="flex flex-col pb-4 text-xs bg-black bg-opacity-10 h-[180px]">
              <div className="mt-4 leading-4 text-center">
                The house across the road
              </div>
            </div>
            <div className="flex flex-col mt-4">
              <div className="text-xs leading-4">Villa Tropicana</div>
              <div className="mt-1 text-base font-medium leading-6 text-ellipsis">
                Bedrooms: 2 | Bathrooms: 1
              </div>
            </div>
          </Link>
        </div>
        <div className="property-box">
          <Link to="/PP" className="flex flex-col flex-1 text-black rounded-md border border-solid border-black border-opacity-10 p-4">
            <div className="flex flex-col pb-4 text-xs bg-black bg-opacity-10 h-[180px]">
              <div className="mt-4 leading-4 text-center">
                A house on the next street
              </div>
            </div>
            <div className="flex flex-col mt-4">
              <div className="text-xs leading-4">Villa Tropicana</div>
              <div className="mt-1 text-base font-medium leading-6 text-ellipsis">
                Bedrooms: 3 | Bathrooms: 4
              </div>
            </div>
          </Link>
        </div>
        <div className="property-box">
          <Link to="/PP" className="flex flex-col flex-1 text-black rounded-md border border-solid border-black border-opacity-10 p-4">
            <div className="flex flex-col pb-4 text-xs bg-black bg-opacity-10 h-[180px]">
              <div className="mt-4 leading-4 text-center">
                Your attic bedroom
              </div>
            </div>
            <div className="flex flex-col mt-4">
              <div className="text-xs leading-4">Villa Tropicana</div>
              <div className="mt-1 text-base font-medium leading-6 text-ellipsis">
                Bedrooms: 1 | Bathrooms: 0
              </div>
            </div>
          </Link>
        </div>
      </Slider>
      <div>

      </div>
    </div>
  );
}

export default PCarousel2;