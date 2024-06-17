import React from "react";
import { Link } from 'react-router-dom';
import ImageCarousel from './Components/ImageCarousel';
import ReviewCarousel from "./Components/ReviewCarousel";
import PCarousel2 from "./Components/PCarousel2";
import PCarousel from "./Components/PropertyCarousel";
import PCarousel1 from "./Components/Pcarousel1";

function APV() {
  return (
      <div className="flex flex-col pb-3 mx-auto w-full bg-white max-w-[480px]">
          <div className="flex flex-col w-full bg-white shadow-sm">
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
          </div>

          <div className="self-stretch mt-7 w-full text-lg font-medium leading-6 text-black">
              Meet John Doe
          </div>

          <div className="flex gap-3 self-stretch px-3 pt-4 mt-3 whitespace-nowrap">
              <div className="shrink-0 self-start w-10 h-10 bg-black bg-opacity-10 rounded-[40px]"/>
              <div className="flex flex-col grow shrink-0 basis-0 w-fit">
                  <div className="text-2xl font-medium leading-6 text-black text-ellipsis">
                      John Doe
                  </div>
              </div>
          </div>

          <div className="border border-grey-300 bg-gray-100 rounded-lg p-4 relative">
              <div className="mt-4" style={{width: '100%', maxWidth: '480px'}}>
                  <ImageCarousel/>
                  <div style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      color: 'white',
                      fontSize: '1.5rem',
                      textAlign: 'center'
                  }}>
                      Placeholder for agent images
                  </div>
              </div>
          </div>

          <Link to="/CA" className="justify-center items-center px-16 py-2.5 mt-3 w-full text-base font-medium leading-6 text-white bg-black rounded-lg max-w-[312px]">
        Contact me
      </Link>

          <div
              className="flex flex-col justify-end items-center self-stretch px-20 pt-20 pb-2 mt-3 w-full text-base font-medium leading-6 text-center text-black rounded-md bg-black bg-opacity-10">
              Real estate agent's Bio
              <br/>-<br/>-<br/>-<br/>-<br/>-
          </div>

          <div
              className="flex flex-col justify-center self-stretch p-3 mt-3 w-full text-black whitespace-nowrap rounded-md bg-white bg-opacity-10">
              <ReviewCarousel
                  reviews={[
                      {name: 'Jason Briggs', comment: '5 stars! You were a great help!'},
                      {name: 'Jermima Jane', comment: 'Wow what a nice house!'},
                      {name: 'Simona Sleepy', comment: 'I enjoy sleeping in my house'},
                      {name: 'Devan Disappointed', comment: '1 star! I did not enjoy this :('},
                  ]}
              />
          </div>

          <div
              className="flex flex-col justify-center self-stretch p-3 mt-3 w-full text-black whitespace-nowrap rounded-md bg-white bg-opacity-10">
              <ReviewCarousel
                  reviews={[
                      {name: 'Jason Briggs', comment: '5 stars! You were a great help!'},
                      {name: 'Jermima Jane', comment: 'Wow what a nice house!'},
                      {name: 'Simona Sleepy', comment: 'I enjoy sleeping in my house'},
                      {name: 'Devan Disappointed', comment: '1 star! I did not enjoy this :('},
                  ]}
              />
          </div>

          <div className="mt-7 text-lg font-medium leading-6 text-black">
              Agents listings
          </div>

          <div className="text-xs leading-4 text-black text-opacity-50">
              Check out these Promoted Listings
          </div>

          <div style={{width: '100%', maxWidth: '480px'}}>
              <PCarousel/>
              <PCarousel2/>
              <PCarousel1/>
          </div>

          <div
              className="flex gap-0 px-5 mt-3 text-center text-black whitespace-nowrap bg-white shadow-sm leading-[140%]">
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

export default APV;