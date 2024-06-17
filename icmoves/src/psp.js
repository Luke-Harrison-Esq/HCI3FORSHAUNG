// Property search page
//luke harrison
//25/02/2024
import React from "react";
import ImageCarousel from './Components/ImageCarousel';
import ReviewCarousel from "./Components/ReviewCarousel";
import { Link } from 'react-router-dom';
import PPCarousel from "./Components/PropertyCarousel";
import PPCarousel1 from "./Components/Pcarousel1";
import PPCarousel2 from "./Components/PCarousel2";
function Psp(props) {
  return (

    <div className="flex flex-col mx-auto w-full bg-white max-w-[480px]">
      <div className="flex flex-col w-full bg-white shadow-sm">

        <div className="flex gap-2 justify-between px-2 py-3 text-xl font-medium leading-6 text-black whitespace-nowrap">
          <img
            loading="lazy"
            src="https://static.vecteezy.com/system/resources/previews/012/043/552/original/eps10-grey-undo-or-back-arrow-icon-isolated-on-white-background-reload-or-rotate-or-arrow-symbol-in-a-simple-flat-trendy-modern-style-for-your-website-design-logo-and-mobile-application-vector.jpg"
            className="w-6 aspect-square"
          />
          <Link to="/" className="grow">
                Home
          </Link>
        </div>
      </div>
      <div className="flex gap-2 px-3 mt-3 text-center text-black whitespace-nowrap">

      </div>
        <div className="flex gap-3 justify-between px-3 pt-4 mt-3 whitespace-nowrap leading-[133%]">
            <div className="flex flex-col flex-1">
                <div className="text-lg font-medium text-black">
            Promoted Listings
          </div>
          <div className="text-xs text-black text-opacity-50">
            Check out these Promoted Listings
          </div>
        </div>
      </div>
      <PPCarousel />
      <div className="flex gap-3 justify-between px-3 pt-4 mt-3 whitespace-nowrap leading-[133%]">
        <div className="flex flex-col flex-1">
          <div className="text-lg font-medium text-black">
            Recent Properties
          </div>
          <div className="text-xs text-black text-opacity-50">
            Check out the latest offerings
          </div>
        </div>
      </div>
      <PPCarousel1 />
      <div className="flex gap-3 justify-between px-3 pt-4 mt-3 whitespace-nowrap leading-[133%]">
        <div className="flex flex-col flex-1">
          <div className="text-lg font-medium text-black">
            Properties in your area
          </div>
          <div className="text-xs text-black text-opacity-50">
            Check out the latest offerings
          </div>
        </div>
      </div>
      <PPCarousel2 />
      <div className="flex gap-2 self-center mt-3 w-full text-black whitespace-nowrap max-w-[321px]">

      </div>
      <div className="flex gap-0 px-5 mt-3 text-center text-black whitespace-nowrap bg-white shadow-sm leading-[140%]">
<Link to="/" className="flex flex-col bg-gray-200 flex-1 py-1">
          <div className="self-center text-xl text-ellipsis">🏠</div>
          <div className="text-xs text-ellipsis">Home</div>
        </Link>
        <Link to="/UserProfile" className="flex flex-col flex-1 py-1">
          <div className="self-center text-xl text-ellipsis">👤</div>
          <div className="text-xs text-ellipsis">My profile</div>
        </Link>
        <Link to="/AgentSearch" className="flex flex-col flex-1 py-1">
          <div className="self-center text-xl text-ellipsis">🧑‍💼</div>
          <div className="text-xs text-ellipsis">Our agents</div>
        </Link>
        <Link to="/CA" className="flex flex-col flex-1 py-1">
          <div className="self-center text-xl text-ellipsis">📞</div>
          <div className="text-xs text-ellipsis">Contact</div>
        </Link>
      </div>
    </div>
  );
}
export default Psp;
