import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { useState } from "react";
import Credits from "./components/Credits";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

const AppLayout = () => {
  const [searchResults, setSearchResults] = useState([]);
  return (
    <div className="main-app bg-black">
      <Header onSearch={setSearchResults} />
      <Body searchResults={searchResults} />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
  },
  {
    path: "/credits",
    element: <Credits />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);
