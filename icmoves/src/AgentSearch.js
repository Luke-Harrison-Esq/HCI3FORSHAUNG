import * as React from "react";
import { Link } from "react-router-dom";
import ReviewCarousel from "./Components/ReviewCarousel";
import ImageCarousel from "./Components/ImageCarousel";

function AgentSearch() {
  const [numAgentsDisplayed, setNumAgentsDisplayed] = React.useState(3);

  const handleLoadMore = () => {
    setNumAgentsDisplayed(prevNum => prevNum + 3); // Increase by 3 to load more agents
  };

  const agentEntries = [
    {
      name: "John Doe",
      role: "Real Estate Agent",
    },
    {
      name: "Jane Doe",
      role: "Real Estate Agent",
    },
    {
      name: "David Schmitt",
      role: "Real Estate Agent",
    },
    {
      name: "Marvin Gates",
      role: "Real Estate Agent",
    },
    {
      name: "Ryan Ayres",
      role: "Real Estate Agent",
    },
    // Duplicates for potential loading
    {
      name: "John Doe",
      role: "Real Estate Agent",
    },
    {
      name: "Jane Doe",
      role: "Real Estate Agent",
    },
    {
      name: "David Schmitt",
      role: "Real Estate Agent",
    },
  ];

  return (
    <div className="flex flex-col pb-3 mx-auto w-full bg-white max-w-[480px]">
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
      <div className="mt-7 w-full text-lg font-medium leading-6 text-black">
        Agent Consultations
      </div>
      {agentEntries.slice(0, numAgentsDisplayed).map((agent, index) => (
        <React.Fragment key={index}>
          <div className="flex gap-3 items-start px-3 pt-4 mt-3">
            <Link to={`/APV`} className="flex gap-0.5 px-1.5 py-1 mt-2.5 text-xs leading-4 text-black rounded border border-black border-solid">
                <div className="shrink-0 w-10 h-10 bg-black bg-opacity-10 rounded-[40px]" />
                <div className="flex flex-col whitespace-nowrap">
                    <div className="text-base font-medium leading-6 text-black text-ellipsis">
                        {agent.name}
                    </div>
                    <div className="text-xs leading-4 text-black text-opacity-50 text-ellipsis">
                         {agent.role}
                    </div>
                </div>
            </Link>
            <Link to="/CA" className="flex gap-0.5 self-start px-1.5 py-1 mt-2.5 text-xs leading-4 text-black rounded border border-black border-solid">
    <button className="flex-grow truncate">Schedule Consultation</button>
</Link>
          </div>
          <div className="mt-4 w-full text-lg font-medium leading-6 text-center text-black">
            Check out some of my reviews!
          </div>
          <ReviewCarousel
            reviews={[
              { name: "Jason Briggs", comment: "5 stars! You were a great help!" },
              { name: "Jermima Jane", comment: "Wow what a nice house!" },
              { name: "Simona Sleepy", comment: "I enjoy sleeping in my house" },
              { name: "Devan Disappointed", comment: "1 star! I did not enjoy this :(" },
            ]}
          />
        </React.Fragment>
      ))}
      {numAgentsDisplayed < agentEntries.length && (
        <div
          className="justify-center items-center self-center px-16 py-2.5 mt-3 w-full text-base font-medium leading-6 text-white bg-black rounded-lg max-w-[312px]"
          onClick={handleLoadMore}
        >
          Show more...
        </div>
      )}

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

export default AgentSearch;