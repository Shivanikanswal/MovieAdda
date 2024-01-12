import { useState } from "react";

const Header = () => {
  //const [searchText, setSearchText] = useState([""]);
  return (
    <div className="text-3xl border-b border-slate-300 mb-4">
      <h1 className="logo text-white p-5">
        <span>ma</span>
        <span>MovieAdda</span>
      </h1>
      <div className="search flex rounded-md outline outline-1 shadow-lg shadow-slate-300">
        <div>
          <input
            type="text"
            placeholder="Search..."
            className="search-box bg-neutral-100 w-96 h-10 pl-4 focus:outline-none"
            value={""}
            // onChange={(e) => {
            // setSearchText(e.target.value);
            // }}
          />
        </div>
        <div>
          <button className="bg-neutral-100 px-2 h-10 border-l border-black text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 opacity-50"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
