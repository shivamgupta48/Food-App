import RestaurentCard from "./RestaurentCard";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
// import Shimmer from "./Shimmer";

const Body = () => {
  const [ListOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurent, setFilteredRestaurent] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9303461&lng=77.62286809999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurent(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  const onlineStatus = useOnlineStatus();
  
  if(onlineStatus === false){
    return <h1>Please Check your internet Contectivity !!!!!</h1>
  }
 const {loggedInUser , setUserName} = useContext(UserContext);
  return (
    <div className="body">
      <div className="filter flex">
        <div className=" search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              // Filter the cards and update the UI
              const filteredRestaurents = ListOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurent(filteredRestaurents);
            }}
          >
            search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
        <button
          className="px-4 py-2 bg-green-100 rounded-lg"
          onClick={() => {
            const filteredList = ListOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredRestaurent(filteredList);
          }}
        >
          Top Rated Resturant
        </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <label>UserName : </label>
          <input className="border border-black p-2" 
          value={loggedInUser}
          onChange={(e)=> setUserName(e.target.value) } />
          
        </div>
        
      </div>
      <div className="res-container flex flex-wrap">
        {filteredRestaurent?.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id} >
            <RestaurentCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
