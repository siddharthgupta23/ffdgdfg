import React from "react";
import "../styles/ListingCard.scss";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import { useState } from "react";
const ListingCard = ({
  listingId,
  creator,
  listingPhotoPaths,
  city,
  province,
  country,
  category,
  type,
  price,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // const gotoPrevSlide = () => {
  //   setCurrentIndex(
  //     (prevIndex) =>
  //       (prevIndex - 1 + listingPhotoPaths.length) % listingPhotoPaths.length
  //   );
  // };
  // const gotoNextSlide = () =>
  // {
  //    setCurrentIndex((prevIndex) => (prevIndex + 1 ) % listingPhotoPaths.length)
  // }
  
  const gotoPrevSlide = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + listingPhotoPaths.length) % listingPhotoPaths.length
    );
  };

  const gotoNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % listingPhotoPaths.length);
  };

  return (
    <div className="listing-card" //onClick={() => {
        // navigate(`/properties/${listingId}`);
      //}}
      >
      <div className="slider-container">
        <div className="slider" style={{ transform: `translateX(-${currentIndex * 100}%)`  }}>
          {listingPhotoPaths?.map((photo, index) => (
            <div key={index} className="slide"
            >
              {/* <img
                 src={`http://localhost:3082/${photo?.replace("public", "")}`}

                 alt={`photo${index + 1}`}
            

            /> */}
            <img src={`http://localhost:3082/${photo?.replace("public", "")}`} alt="Listing Image" onError={(e) => console.error("Error loading image:", e)}
 />



              {/* <img
              src={`http://localhost:3082/${photo?.split('public/').pop()}`}
               // alt={`photo${index + 1}`}
              /> */}
              <div className="prev-button" onClick={(e)=>{gotoPrevSlide(e)}}>
                <ArrowBackIosNew sx={{ fontSize: "15px" }} />
              </div>
              <div className="next-button" onClick={(e)=>{gotoNextSlide(e)}}>
                <ArrowForwardIos sx={{ fontSize: "15px" }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
