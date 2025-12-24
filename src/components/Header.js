import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { BASE_URL } from "../utils/constants";
import { API_KEY } from "../utils/constants";

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
    <div className="border-b border-slate-500 mb-4 flex justify-between p-4 items-center mx-14">
      <h1 className="logo text-3xl">
        <a href="/">
          <div className="flex justify-center">
            <span>
              <img
                src="https://i.pinimg.com/736x/ea/8d/11/ea8d11f1ffc6355b8a440106ce61d0f3.jpg"
                alt="App logo"
                className=" h-14 w-20"
              ></img>
            </span>
            <span className="title mt-2 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text font-extrabold text-4xl text-transparent">MovieAdda</span>
          </div>
        </a>
      </h1>
      <div className="search flex bg-slate-300 h-10 rounded-lg">
          <input
            type="text"
            placeholder="Search..."
            className="search-box w-96 pl-4 focus:outline-none rounded-lg bg-slate-300 text-slate-800"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button className="px-3 border-l border-black text-black">
            <FontAwesomeIcon icon={faSearch} />
          </button>
      </div>
    </div>
  );
};

export default Header;
