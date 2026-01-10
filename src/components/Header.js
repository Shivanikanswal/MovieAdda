import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { BASE_URL } from "../utils/constants";
import { API_KEY } from "../utils/constants";
import HamburgerToggle from "./HamburgerToggle";

const Header = (props) => {
  const { onSearch } = props;
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const url = BASE_URL + "/search/movie" + API_KEY + "&query=" + searchText;
  useEffect(() => {
    if (searchResults) {
      onSearch(searchResults);
    }
  }, [searchResults, onSearch]);

  const fetchData = async () => {
    const searchData = await fetch(url);
    const jsonData = await searchData.json();
    setSearchResults(jsonData?.results);
  };

  useEffect(() => {
    if (searchText) {
      fetchData(url);
    } else {
      setSearchResults([]);
    }
  }, [url, searchText]);

  return (
    <div className="header border-b border-slate-500 mb-4 flex py-4 items-center p-6 sm:px-10 md:px-14 justify-between">
      <h1 className="logo text-2xl md:text-3xl">
        <a href="/">
          <div className="flex justify-center">
            <span>
              <img
                src="https://i.pinimg.com/736x/ea/8d/11/ea8d11f1ffc6355b8a440106ce61d0f3.jpg"
                alt="App logo"
                className="h-12 w-16 md:h-14 md:w-18 lg:h-14 lg:w-20"
              ></img>
            </span>
            <span className="title hidden sm:block mt-2 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text font-extrabold text-2xl md:text-3xl lg:text-4xl text-transparent">MovieAdda</span>
          </div>
        </a>
      </h1>
      <div className="search hidden md:flex bg-slate-300 h-10 rounded-lg">
          <input
            type="text"
            placeholder="Search..."
            className="search-box w-64 md:w-64 lg:w-96 pl-4 focus:outline-none rounded-lg bg-slate-300 text-slate-800"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button className="px-3 border-l border-black text-black rounded-r-lg">
            <FontAwesomeIcon icon={faSearch} />
          </button>
      </div>
    </div>
  );
};

export default Header;
