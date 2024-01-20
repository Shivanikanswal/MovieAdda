import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [searchText, setSearchText] = useState([""]);
  return (
    <div className="border-b border-slate-300 mb-4 flex justify-between">
      <h1 className="logo text-white p-5 text-3xl">
        <span>
          <img src=""></img>
        </span>
        <span>MovieAdda</span>
      </h1>
      <div className="search flex p-5 rounded-sm">
        <div>
          <input
            type="text"
            placeholder="Search..."
            className="search-box bg-neutral-100 w-96 h-10 pl-4 focus:outline-none"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
        </div>
        <div>
          <button className="bg-neutral-100 px-2 h-10 border-l border-black text-black">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
