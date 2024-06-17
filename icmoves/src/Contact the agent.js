import * as React from "react";
import { Link } from "react-router-dom";

function CA() {
  // Placeholder array of image URLs
  const images = [
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
  ];

  const handleSendMessage = () => {
    // Placeholder action for sending message
    // Prompt the user that the message has been sent
    window.alert("Your message has been sent!");
    // Redirect to "/"
    window.location.href = "/";
  };

  return (
    <div className="flex flex-col items-center justify-center pb-3 bg-white max-w-[346px] mx-auto">
      <div className="flex flex-col w-full bg-white shadow-sm">
        <div className="flex gap-2.5 py-1.5 pl-20 bg-white">
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
      <div className="mt-7 w-full text-lg font-medium leading-6 text-black">
        Message our agent!
      </div>
      <div className="flex gap-3 px-3 pt-4 mt-3 whitespace-nowrap">
        <div className="shrink-0 self-start w-10 h-10 bg-black bg-opacity-10 rounded-[40px]" />
        <Link to="/APV" className="flex flex-col flex-grow flex-shrink-0 flex-basis-0 w-fit">
          <div className="text-2xl font-medium leading-6 text-black truncate">
            John Doe
          </div>
          <div className="text-xs leading-4 text-black text-opacity-50 truncate">
            Real Estate Agent
          </div>
        </Link>
      </div>

      <input
        type="text"
        className="justify-center self-center px-3 py-1 mt-3 w-full text-sm leading-5 rounded-md border border-solid border-black border-opacity-10 max-w-[322px] text-black text-opacity-50"
        placeholder="Enter your message here, user information is taken from account and given directly to the john doe"
      />
      <div
        className="justify-center items-center self-center px-16 py-2.5 mt-3 w-full text-base font-medium leading-6 text-white whitespace-nowrap bg-black rounded-lg max-w-[312px]"
        onClick={handleSendMessage}
      >
        Send
      </div>
      <div className="flex gap-2 px-5 mt-3 text-center text-black whitespace-nowrap bg-white shadow-sm leading-[140%]">
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

export default CA;