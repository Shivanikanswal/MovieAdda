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

  //console.log(searchText);
  useEffect(() => {
    if (searchResults) {
      onSearch(searchResults);
    }
  }, [searchResults, onSearch]);

  const fetchData = async () => {
    const searchData = await fetch(url);
    const jsonData = await searchData.json();
    setSearchResults(jsonData?.results);
    //console.log(jsonData);
  };

  useEffect(() => {
    if (searchText) {
      fetchData(url);
    } else {
      setSearchResults([]);
    }
  }, [url, searchText]);
  return (
    <div className="border-b border-slate-300 mb-4 flex justify-between p-5">
      <h1 className="logo text-white text-3xl">
        <span>
          <img src=""></img>
        </span>
        <span>MovieAdda</span>
      </h1>
      <div className="search flex rounded-sm">
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
