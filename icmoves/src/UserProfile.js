//login
//luke harrison
//25/02/2024
import React from "react";
import { Link } from 'react-router-dom';

function UserProfile(props) {
  return (
    <div className="flex flex-col pb-3 bg-white max-w-[346px]">
      <div className="flex flex-col w-full bg-white shadow-sm">
        <div
            className="flex gap-2 justify-between px-2 py-3 text-xl font-medium leading-6 text-black whitespace-nowrap">
          <img
              loading="lazy"
              src="https://static.vecteezy.com/system/resources/previews/012/043/552/original/eps10-grey-undo-or-back-arrow-icon-isolated-on-white-background-reload-or-rotate-or-arrow-symbol-in-a-simple-flat-trendy-modern-style-for-your-website-design-logo-and-mobile-application-vector.jpg"
              className="w-6 aspect-square"
          />
          <Link to="/Login" className="grow">
            Login
          </Link>
        </div>
        <div className="justify-center mt-7 w-full text-lg font-medium leading-6 text-black text-center">
          This is your profile
        </div>
        <input
            type="text"
            placeholder="First name"
            className="justify-center self-center py-1 pr-1 pl-3 mt-3 w-full text-sm whitespace-nowrap rounded-md border border-solid border-black border-opacity-10 max-w-[322px] text-black text-opacity-50"
        />
        <input
            type="text"
            placeholder="Second name"
            className="justify-center self-center py-1 pr-1 pl-3 mt-3 w-full text-sm whitespace-nowrap rounded-md border border-solid border-black border-opacity-10 max-w-[322px] text-black text-opacity-50"
        />
        <div
            className="flex gap-2 justify-between items-center px-16 py-12 mt-3 text-base font-medium leading-6 text-center text-black rounded-md bg-black bg-opacity-10">
            <button
                onClick={() => {

                    alert('Please add a profile picture!');
                }}
                className="flex-auto self-stretch my-auto text-sm leading-5 p-2 rounded-md border border-solid border-black border-opacity-10 truncate"
            >
                User would be prompted to add profile picture (not implementing this right now because images cause crashes without a way to save them properly)
            </button>
            <img
                loading="lazy"
                src=""
                className="self-stretch my-auto w-6 aspect-square"
            />
        </div>
          <input
              type="text"
              placeholder="This is your Bio pleas add write about yourself"
              className="justify-center self-center py-1 pr-1 pl-3 mt-3 w-full text-sm whitespace-nowrap rounded-md border border-solid border-black border-opacity-10 max-w-[322px] text-black text-opacity-50"
        />
        <input
            type="text"
            placeholder="Mobile number"
            className="justify-center self-center py-1 pr-1 pl-3 mt-3 w-full text-sm whitespace-nowrap rounded-md border border-solid border-black border-opacity-10 max-w-[322px] text-black text-opacity-50"
        />
        <input
            type="text"
            placeholder="Email"
            className="justify-center self-center py-1 pr-1 pl-3 mt-3 w-full text-sm whitespace-nowrap rounded-md border border-solid border-black border-opacity-10 max-w-[322px] text-black text-opacity-50"
        />
        <Link
        to="/"
        className="justify-center items-center self-center px-16 py-2.5 mt-3 w-full text-base font-medium leading-6 text-white whitespace-nowrap bg-black rounded-lg max-w-[312px]"
      >
        Finish
      </Link>
        <div
            className="flex gap-1 pr-5 pl-1 mt-3 text-center text-black whitespace-nowrap bg-white shadow-sm leading-[140%]">
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
    </div>
  );
}

export default UserProfile;