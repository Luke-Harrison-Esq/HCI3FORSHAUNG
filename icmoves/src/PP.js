//Property page
//luke harrison
//26/02/2024
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Link } from 'react-router-dom';
import PPCarousel from "./Components/PPcarousel";

function PP(props) {
  return (
    <div className="flex flex-col mx-auto w-full bg-white max-w-[480px]">
      <div className="flex flex-col w-full bg-white shadow-sm">

        <div className="flex gap-2 justify-between px-2 py-3 text-xl font-medium leading-6 text-black whitespace-nowrap">
          <img
            loading="lazy"
            src="https://static.vecteezy.com/system/resources/previews/012/043/552/original/eps10-grey-undo-or-back-arrow-icon-isolated-on-white-background-reload-or-rotate-or-arrow-symbol-in-a-simple-flat-trendy-modern-style-for-your-website-design-logo-and-mobile-application-vector.jpg"
            className="w-6 aspect-square"
          />
          <Link to="/Psp" className="grow">
                Property Search Page
          </Link>
        </div>
      </div>
      <div className="flex flex-col px-3 py-4 mt-3 w-full text-base font-medium leading-6 text-black">
        <PPCarousel/>
        <Link to="/CA" className="flex justify-center items-center self-center px-16 py-2.5 mt-2 w-full text-white whitespace-nowrap bg-black rounded-lg max-w-[312px]">
    Contact Seller
</Link>
        <div className="flex flex-col justify-center p-3 mt-2.5 text-sm leading-5">
          <div className="justify-center items-center px-1 pt-1 pb-1 mt-5 text-center rounded-md bg-black bg-opacity-10">
            2 bedroom property with west facing windows. 2 bathrooms on suit and
            plenty of cupboard space
          </div>
          <div className="mt-6 whitespace-nowrap leading-[143%]">
            Location details AB69 72D
          </div>
          <MapContainer center={[55.48487768321218, -4.6073211746146665]} zoom={13}
                        style={{height: '400px', border: '2px solid black', borderRadius: '50px'}}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[55.48487768321218, -4.6073211746146665]}>
              <Popup>
                This Property!
              </Popup>
            </Marker>
          </MapContainer>
          <div className="justify-center items-center px-1 pt-1 pb-1 mt-5 text-center rounded-md bg-black bg-opacity-10">
            Area information:-
            <br/>2 Nearby schools, supermarket and corner store within 5 and 1
            mile respectively.
            <br/>
            Parks close
            <br/>
            Swimming pool and gym within a 10 minute walk
            <br/>
            Low crime rate and clear roads
          </div>
        </div>
        <div className="justify-center items-center px-1 pt-1 pb-1 mt-5 text-center rounded-md bg-black bg-opacity-10">
          <img
              loading="lazy"
              src="https://i.ytimg.com/vi/zumJJUL_ruM/maxresdefault.jpg"
              className="justify-center items-center px-1 pt-1 pb-1 mt-5 text-center rounded-md bg-black bg-opacity-10">
          </img>
          <div className="mt-5 text-sm leading-5 whitespace-nowrap">
            Spacious living room
          </div>
        </div>
        <div className="justify-center items-center px-1 pt-1 pb-1 mt-5 text-center rounded-md bg-black bg-opacity-10">
          <img
              loading="lazy"
              src="https://www.shutterstock.com/image-illustration/modern-bathroom-interior-wooden-decor-260nw-1659463054.jpg"
              className="justify-center items-center px-1 pt-1 pb-1 mt-5 text-center rounded-md bg-black bg-opacity-10">
          </img>
          <div className="mt-8 text-sm leading-5 whitespace-nowrap">
           bathroom refurbished in 2022 modern aesthetic
          </div>
        </div>
        <div className="justify-center items-center px-1 pt-1 pb-1 mt-5 text-center rounded-md bg-black bg-opacity-10">
          <img
              loading="lazy"
              src="https://www.thespruce.com/thmb/HrWPmUEjB_yA71L6OJjiQPPvov4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/master-bedroom-in-new-luxury-home-with-chandelier-and-large-bank-of-windows-with-view-of-trees-1222623844-212940f4f89e4b69b6ce56fd968e9351.jpg"
              className="justify-center items-center px-1 pt-1 pb-1 mt-5 text-center rounded-md bg-black bg-opacity-10">
          </img>
          <div className="mt-5 text-sm leading-5">
            very nice bedroom
          </div>
        </div>
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
export default PP