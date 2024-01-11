import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

const AppLayout = () => {
  return (
    <div className="main-app bg-black">
      <Header />
      <Body />
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
