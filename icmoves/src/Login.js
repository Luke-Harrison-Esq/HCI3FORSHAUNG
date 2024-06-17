//login
//luke harrison
//25/02/2024
import React, { useState }from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import ImageCarousel from './Components/ImageCarousel';
import ReviewCarousel from "./Components/ReviewCarousel";
import { Link } from 'react-router-dom';
import TickBoxLogin from "./Components/TickboxLogin";

function LP(props) {
      const [isAgent, setIsAgent] = useState(false);

  const handleTickBoxChange = (isChecked) => {
    setIsAgent(isChecked);
  };
  return (
      <div className="flex flex-col pb-3 bg-white leading-[143%] max-w-[346px] text-black text-opacity-50">
          <div
              className="flex gap-2 justify-between px-2 py-3 text-xl font-medium leading-6 text-black whitespace-nowrap">
              <img
                  loading="lazy"
                  src="https://static.vecteezy.com/system/resources/previews/012/043/552/original/eps10-grey-undo-or-back-arrow-icon-isolated-on-white-background-reload-or-rotate-or-arrow-symbol-in-a-simple-flat-trendy-modern-style-for-your-website-design-logo-and-mobile-application-vector.jpg"
                  className="w-6 aspect-square"
              />
              <Link to="/" className="grow">
                  Home
              </Link>
          </div>
          <img
              loading="lazy"
              src="https://www.sme-news.co.uk/wp-content/uploads/2021/11/Login.jpg"
              className="justify-center items-center px-1 pt-1 pb-1 mt-5 text-center rounded-md bg-black bg-opacity-10">
          </img>
          <input
              type="text"
              placeholder="Username"
              className="justify-center self-center py-1 pr-1 pl-3 mt-3 w-full text-sm whitespace-nowrap rounded-md border border-solid border-black border-opacity-10 max-w-[322px]"
              onChange={(e) => console.log(e.target.value)}
          />
          <input
              type="text"
              placeholder="Password"
              className="justify-center self-center py-1 pr-1 pl-3 mt-3 w-full text-sm whitespace-nowrap rounded-md border border-solid border-black border-opacity-10 max-w-[322px]"
              onChange={(e) => console.log(e.target.value)}
          />
          <Link to={isAgent ? "/AgentProfile" : "/UserProfile"} className="text-white">
        <div className="justify-center items-center px-16 py-2.5 mt-3 w-full text-base font-medium leading-6 text-white whitespace-nowrap bg-black rounded-lg">
          Login
        </div>
      </Link>
          <input
              type="text"
              placeholder="Confirm password"
              className="justify-center self-center py-1 pr-1 pl-3 mt-3 w-full text-sm whitespace-nowrap rounded-md border border-solid border-black border-opacity-10 max-w-[322px]"
              onChange={(e) => console.log(e.target.value)}
          />
          <input
              type="number"
              placeholder="Mobile Number"
              className="justify-center self-center py-1 pr-1 pl-3 mt-3 w-full text-sm whitespace-nowrap rounded-md border border-solid border-black border-opacity-10 max-w-[322px]"
              onChange={(e) => console.log(e.target.value)}
          />
          <input
              type="text"
              placeholder="Email"
              className="justify-center self-center py-1 pr-1 pl-3 mt-3 w-full text-sm whitespace-nowrap rounded-md border border-solid border-black border-opacity-10 max-w-[322px]"
              onChange={(e) => console.log(e.target.value)}
          />
          <TickBoxLogin onCheckboxChange={handleTickBoxChange} />
          <Link to={isAgent ? "/AgentProfile" : "/UserProfile"} className="text-white">
        <div className="justify-center items-center px-16 py-2.5 mt-3 w-full text-base font-medium leading-6 text-white whitespace-nowrap bg-black rounded-lg">
          Register
        </div>
      </Link>
          <div
              className="flex gap-1 px-5 mt-3 text-center text-black whitespace-nowrap bg-white shadow-sm leading-[140%]">
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

export default LP;