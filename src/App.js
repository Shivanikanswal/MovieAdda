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

/**
 *App Component
 *-Header Component
 *----Logo
 *----Searchbar
 *-Body Component
 *----MovieContainer
 *------MovieCards
 *-Footer Component(Optional)
 *----Optional
 */

// https://api.themoviedb.org/3/movie/popular?api_key=a34b3f8b17f2cd887f4d28e55e96402b
// https://image.tmdb.org/t/p/original/+ poster path
//posterpath-- img along with movie name
// backdrop path-- img wihout movie name

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
