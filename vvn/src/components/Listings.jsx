import { useDispatch, useSelector } from "react-redux";
import { categories } from "../data";
import "../styles/Listingss.scss";
import ListingCard from "./ListingCard";
import Loader from "./Loader";
import { useState, useEffect } from "react";
import { setListings } from "../redux/state";

const Listings = () => {
  const dispatch = useDispatch();
  const [Loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const listings = useSelector((state) => state.listings);

  const getFeedListings = async () => {
    try {
      const response = await fetch(
        selectedCategory !== "All"
          ? `http://localhost:3082/properties?category=${selectedCategory}`
          : "http://localhost:3082/properties",
        {
          method: "GET",
        }
      );

      const data = await response.json();
      dispatch(setListings({ listings: data }));
      setLoading(false);
    } catch (err) {
      console.log("Fetch Listings Failed", err.message);
    }
  };

  useEffect(() => {
    getFeedListings();
  }, [selectedCategory]);
  console.log(listings);

  return (
    <>
      <div className="category-list">
        {categories?.map((category, index) => (
          <div
            className={`category`}
            key={index}
            onClick={() => setSelectedCategory(category.label)}
          >
            <div className="category_icon">{category.icon}</div>
            <p>{category.label}</p>
          </div>
        ))}
      </div>
      {Loading ? (
        <Loader />
      ) : (
        <div className="listings">
          {listings.map(
            (
              {_id,
              creator,
              listingPhotoPaths,
              city,
              province,
              country,
              category,
              type,
              price
            
            }) => (
              <ListingCard listingId={_id}
              creator={creator} 
              listingPhotoPaths={listingPhotoPaths}
              city={city}
              province={province}
              country={country}
              category={category}
              type={type}
              price={price}/>
            )
          )}
        </div>
      )}
    </>
  );
};
export default Listings;
