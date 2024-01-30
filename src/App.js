import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { useState } from "react";

const AppLayout = () => {
  const [searchResults, setSearchResults] = useState([]);
  return (
    <div className="main-app bg-black">
      <Header onSearch={setSearchResults} />
      <Body searchResults={searchResults} />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
