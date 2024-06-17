// This is the router page it connects all my pages together
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './App';
import Psp from './psp';
import ACalc from "./Affordability calculator";
import PP from "./PP";
import LP from "./Login";
import AgentProfile from "./AgentProfile";
import UserProfile from "./UserProfile";
import AddListing from "./AddListing";
import AgentSearch from "./AgentSearch";
import APV from "./AgentProfileView";
import ContactTheAgent from "./Contact the agent";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Psp" element={<Psp />} />
        <Route path="/ACalc" element={<ACalc />} />
        <Route path="/PP" element={<PP />} />
        <Route path="/Login" element={<LP />} />
        <Route path="/UserProfile" element={<UserProfile/>} />
        <Route path="/AgentProfile" element={<AgentProfile />} />
        <Route path="/AddListing" element={<AddListing />} />
        <Route path="/AgentSearch" element={<AgentSearch />} />
        <Route path="/APV" element={<APV />} />
        <Route path="/CA" element={<ContactTheAgent />} />
      </Routes>
    </div>
  );
}

export default App;