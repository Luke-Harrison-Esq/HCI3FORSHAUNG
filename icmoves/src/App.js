import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import ImageCarousel from './Components/ImageCarousel';
import ReviewCarousel from "./Components/ReviewCarousel";
import { Link } from 'react-router-dom';

function Homepage(props) {
  return (
    <div className="flex flex-col w-full bg-white">
      <div className="flex flex-col items-center bg-white shadow-sm">
        <div className="flex gap-0.5 py-1.5 pl-20 bg-white md:max-h-[48px]"></div>
        <div className="flex gap-3 justify-between px-4 py-3 text-black whitespace-nowrap w-full max-w-screen-xl mx-auto">
          <div className="flex-grow text-xl font-medium leading-6">IC Moves</div>
          <Link to="/login" className="my-auto text-xs leading-4 text-center truncate">Login/Sign In</Link>
        </div>
      </div>
      <div className="flex gap-1 justify-end self-center py-1 pr-1 pl-3 mt-3 rounded-md border border-solid border-black border-opacity-10 w-full max-w-screen-xl mx-auto">
        <input
          type="text"
          placeholder="Search for properties"
          className="flex-grow my-auto text-sm leading-5 whitespace-nowrap text-black text-opacity-50"
          onChange={(e) => console.log(e.target.value)}
        />
        <Link to="/Psp" className="flex justify-center items-center px-2 py-1 bg-black rounded aspect-w-23 aspect-h-18">
            <img loading="lazy" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtt3z7Gpzbb7URyRu97kgxCxvn5gje3N0-THodKBRH_A&s" className="w-5 aspect-square" alt="Search icon" />
        </Link>
      </div>
      <div className="flex flex-col justify-center px-3 mt-3 w-full max-w-screen-xl mx-auto text-black whitespace-nowrap">
        <div className="flex gap-2 justify-between py-3">
          <div className="justify-center items-center px-1.5 h-8 text-xl leading-8 text-center rounded-2xl aspect-w-23 aspect-h-18 bg-black bg-opacity-10 truncate">🏢</div>
          <Link to="/psp" className="flex-grow my-auto text-sm leading-5 p-2 rounded-md border border-solid border-black border-opacity-10 truncate">Commercial Properties</Link>
        </div>
        <div className="flex gap-2 justify-between py-3">
          <div className="justify-center items-center px-1.5 h-8 text-xl leading-8 text-center rounded-2xl aspect-w-23 aspect-h-18 bg-black bg-opacity-10 truncate">🏡</div>
          <Link to="/psp" className="flex-grow my-auto text-sm leading-5 p-2 rounded-md border border-solid border-black border-opacity-10 truncate">Residential Properties</Link>
        </div>
        <div className="flex gap-2 justify-between py-3">
          <div className="justify-center items-center px-1.5 h-8 text-xl leading-8 text-center rounded-2xl aspect-w-23 aspect-h-18 bg-black bg-opacity-10 truncate">🏘️</div>
          <Link to="/psp" className="flex-grow my-auto text-sm leading-5 p-2 rounded-md border border-solid border-black border-opacity-10 truncate">New Developments</Link>
        </div>
      </div>
        <div className="w-full h-80">
            <MapContainer center={[55.48652833128924, -4.611751651379961]} zoom={13} className="w-full h-full">
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={[55.48652833128924, -4.611751651379961]}>
                    <Popup>Where we're based!</Popup>
                </Marker>
            </MapContainer>
        </div>
        <div className="flex gap-2 px-3 mt-3 text-xs leading-4 text-center text-black whitespace-nowrap">
            <Link to="/psp"
                  className="flex justify-center p-2 rounded-md border border-solid border-black border-opacity-10 truncate"
                  style={{width: '33%'}}>Property Search</Link>
            <Link to="/ACalc"
                  className="flex justify-center p-2 rounded-md border border-solid border-black border-opacity-10 truncate"
                  style={{width: '33%'}}>Mortgage Calculators</Link>
            <Link to="/AgentSearch"
                  className="flex justify-center p-2 rounded-md border border-solid border-black border-opacity-10 truncate" style={{ width: '33%' }}>Find Agents</Link>
      </div>
      <div className="mt-7 w-full text-lg font-medium leading-6 text-center text-black">Mortgage Calculators</div>
      <Link to="/ACalc" className="flex flex-col self-center mt-3 w-full max-w-screen-xl mx-auto text-black rounded-md border border-solid border-black border-opacity-10">
        <div className="flex flex-col items-center px-5 pb-12 text-xs leading-4 bg-black bg-opacity-10">
          <div className="justify-center p-1 font-medium truncate rounded-md bg-black bg-opacity-10">Calculate your mortgage here!</div>
          <div className="self-end mt-14 mb-6">PLACEHOLDER FOR IMAGE PROVIDED BY ICMOVES</div>
        </div>
        <div className="flex flex-col items-center p-2 truncate">
          <div className="text-xs leading-4">Mortgage and Affordability Calculator</div>
          <div className="mt-1 text-base font-medium leading-6">£???? Find your estimated price!</div>
        </div>
      </Link>
      <div className="mt-7 w-full text-lg font-medium leading-6 text-black">Find Agents</div>
      <div className="flex gap-3 px-3 pt-4 mt-3 whitespace-nowrap">
        <div className="w-10 h-10 bg-black bg-opacity-10 rounded-full"></div>
        <Link to="/APV" className="flex flex-col flex-1">
          <div className="text-base font-medium leading-6 text-black truncate">John Doe</div>
          <div className="text-xs leading-4 text-black text-opacity-50 truncate">Real Estate Agent</div>
        </Link>
        <Link to="/CA" className="flex gap-0.5 self-start px-1.5 py-1 mt-2.5 text-xs leading-4 text-black rounded border border-black border-solid">
          <button className="flex-grow truncate">Schedule Consultation</button>
        </Link>
      </div>
      <div className="flex flex-col justify-center px-3 mt-3 w-full whitespace-nowrap">
      </div>
      <div className="mt-4 w-full text-lg font-medium leading-6 text-center text-black">Check out some of my reviews!</div>
      <ReviewCarousel
        reviews={[
          { name: 'Jason Briggs', comment: '5 stars! You were a great help!' },
          { name: 'Jermima Jane', comment: 'Wow what a nice house!' },
          { name: 'Simona Sleepy', comment: 'I enjoy sleeping in my house' },
          { name: 'Devan Disappointed', comment: '1 star! I did not enjoy this :(' },
        ]}
      />
      <div className="mt-10 w-5 h-1 bg-white rounded-full"></div>
      <Link to="/AgentSearch" className="flex-grow my-auto text-sm leading-5 p-2 rounded-md border border-solid border-black border-opacity-10 justify-center items-center bg-black text-white hover:bg-blue-600">Find more agents</Link>
      <div className="mt-10 w-5 h-1 bg-white rounded-full"></div>
      <div className="border border-grey-300 bg-gray-100 rounded-lg p-4">
        <div className="mt-4 w-full text-lg font-medium leading-6 text-center text-black">Find your dream property with us!</div>
          <img className="centered-image"
               src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600"
               alt="Image 1"/>
      </div>
        <div className="mt-7 w-full text-xl font-medium leading-12 text-center text-black">Legal help</div>
        <div className="mt-4 w-full text-lg font-medium leading-6 text-center text-black">Citizens advice</div>
      <a href="https://www.citizensadvice.org.uk/housing/moving-and-improving-your-home/buying-a-home/" className="flex-grow my-auto text-sm leading-5 p-2 rounded-md border border-solid border-black border-opacity-10 justify-center items-center bg-black text-white hover:bg-blue-600">Legal advice on buying a home</a>
      <div className="mt-4 w-full text-lg font-medium leading-6 text-center text-black">Acandco.com</div>
      <a href="https://www.acandco.com/property/letting/landlord-and-letting-law" className="flex-grow my-auto text-sm leading-5 p-2 rounded-md border border-solid border-black border-opacity-10 justify-center items-center bg-black text-white hover:bg-blue-600">Landlord and letting advice</a>
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

export default Homepage;