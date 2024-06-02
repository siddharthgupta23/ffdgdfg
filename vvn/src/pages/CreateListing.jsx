// import React from "react";
// import "../styles/Create_Listing.scss";
// import Navbar from "../components/Navbar";
// import { categories, types, facilities } from "../data";
// import { RemoveCircleOutline, AddCircleOutline } from "@mui/icons-material";
// import variables from "../styles/variables.scss";
// import { IoIosImages } from "react-icons/io";
// import { useState } from "react";
// import { Draggable, Droppable, DragDropContext } from "react-beautiful-dnd";
// import { BiTrash } from "react-icons/bi";
// //import Index from '@mui/material/styles/Index';
// const CreateListing = () => {
//   const[category,setCategory]=useState("");
//   const[type, setType]=useState("");
  
//   const [formLocation,setFormLocation]=useState({
//     streetAdddress:"",
//     aptSuite:"",
//     city:"",
//     province:"",
//     country:"",

//   });
//   const handleChangeLocation =(e)=>{
//     const { name, value }=e.target
//     setFormLocation({
//     ...formLocation,
//     [name]:value,

//     })
//   }
//   const [guestCount,setGuestCount]=useState(1)
//   const [bedroomCount,setBedroomCount]=useState(1)
//   const [bedCount,setBedCount]=useState(1)
//   const [bathroomCount,setBathroomCount]=useState(1)
//   const[amenities,setAmenities]=useState([]);
//   const handleSelectAmenities=(facility)=>{
//     if (amenities.includes(facility)){
//       setAmenities((prevAmenities) =>prevAmenities.filter((option) => option !==facility))
//     }
//     else{
//       setAmenities((prev)=>[...prev,facility])
//     }
//   }

//   const [photos, setPhotos] = useState([]);
//   const handleUploadPhotos = (e) => {
//     const newPhotos = e.target.files;
//     setPhotos((prevPhotos) => [...prevPhotos, ...newPhotos]);
//   };
//   const HandleDragPhoto   = (result) => {
//     if (!result.destination) return;
//     const items = Array.from(photos);
//     const [reorderedItem] = items.splice(result.source.index, 1);
//     items.splice(result.desstination.index, 0, reorderedItem);
//     setPhotos(items);
//   };
//   const handleRemovePhoto = (indexToRemove) => {
//     setPhotos((prevPhotos) =>
//       prevPhotos.filter((_, index) => index !== indexToRemove)
//     );
//   };
//   return (
//     <>
//       <Navbar />
//       <div className="create-listing">
//         <h1> Publish your place</h1>
//         <form>
//           <div className="create-listing_step1"></div>
//           <h2>Step1: tell us about are place </h2>
//           <hr />
//           <h3>Which of these categories best describe your place </h3>
//           <div className="category-list">
//             {categories?.map((item, index) => (
//               <div className={`category ${category === item.label ? "selected":""}`} key={index} onClick={() => setCategory(item.label)}>
//                 <div className="category_icon">{item.icon}</div>
//                 <p>{item.label}</p>
//               </div>
//             ))}
//           </div>
//           <h3> what type of place will guest have ?</h3>
//           <div className="type-list">
//             {types?.map((item, index) => (
//               <div className={`type ${type=== item.name ? "selected" :""}`} key={index} onClick={() =>setType(item.name)}>
//                 <div className="type_text">
//                   <h4> {item.name}</h4>
//                   <p>{item.description}</p>
//                 </div>
//                 <div className="type_icon">{item.icon}</div>
//               </div>
//             ))}
//           </div>
//           <h3> where your place located ?</h3>
//           <div className="full">
//             <div className="location">
//               <p>Street address</p>
//               <input
//                 type="text"
//                 placeholder="Street address"
//                 name="streetAddress"
//                 value={formLocation.streetAdddress}
//                 onChange={handleChangeLocation}
//                 required
//               />
//             </div>
//           </div>
//           <div className="half">
//             <div className="location">
//               <p>Apartment,Suite,etc,(if applicable)</p>
//               <input
//                 type="text"
//                 placeholder="Apt,Suite,etc(if applicable)"
//                 name="aptSuite"
//                 value={formLocation.aptSuite}
//                 onChange={handleChangeLocation}
//                 required
//               />
//             </div>

//             <div className="location">
//               <p>city</p>
//               <input type="text" placeholder="city" name="city" value={formLocation.city}  onChange={handleChangeLocation}required />
//             </div>
//           </div>
//           <div className="half">
//             <div className="location">
//               <p>Province</p>
//               <input
//                 type="text"
//                 placeholder="Province"
//                 name="province"
//                 value={formLocation.province}
//                 onChange={handleChangeLocation}
//                 required
//               />
//             </div>

//             <div className="location">
//               <p>Country</p>
//               <input
//                 type="text"
//                 placeholder="Country"
//                 name="Country"
//                 value={formLocation.country}
//                 onChange={handleChangeLocation}
//                 required
//               />
//             </div>
//             <h3> Share some basics about your place </h3>
//             <div className="basics">
//               <div className="basic">
//                 <p>Guests</p>
//                 <div className="basic_count">
//                   <RemoveCircleOutline
//                   onClick={() =>{guestCount>1 && setGuestCount(guestCount -1)} }
//                     sx={{
//                       fontSize: "25px",
//                       cursor: "pointer",
//                       "&:hover": { color: variables.pinkred },
//                     }}
//                   />
//                   <p>{guestCount}</p>
//                   <AddCircleOutline
//                     sx={{
//                       fontSize: "25px",
//                       cursor: "pointer",
//                       "&:hover": { color: variables.pinkred },
//                     }}
//                   />
//                 </div>
//               </div>
//               <div className="basic">
//                 <p>Bedrooms</p>
//                 <div className="basic_count">
//                   <RemoveCircleOutline
//                   onClick={() =>{bedroomCount>1 && setBedroomCount(bedroomCount -1)} }
//                     sx={{
//                       fontSize: "25px",
//                       cursor: "pointer",
//                       "&:hover": { color: variables.pinkred },
//                     }}
//                   />
//                   <p>{bedroomCount}</p>
//                   <AddCircleOutline
//                   onClick={ setBedroomCount(bedroomCount +1)} 
//                     sx={{
//                       fontSize: "25px",
//                       cursor: "pointer",
//                       "&:hover": { color: variables.pinkred },
//                     }}
//                   />
//                 </div>
//               </div>
//               <div className="basic">
//                 <p>Beds</p>
//                 <div className="basic_count">
//                   <RemoveCircleOutline
//                   onClick={() =>{bedCount>1 && setBedCount(bedCount -1)} }
//                     sx={{
//                       fontSize: "25px",
//                       cursor: "pointer",
//                       "&:hover": {color: variables.pinkred },
//                     }}
//                   />
//                   <p>{bedCount}</p>
//                   <AddCircleOutline
//                   onClick={ setBedCount(bedCount +1)} 
//                     sx={{
//                       fontSize: "25px",
//                       cursor: "pointer",
//                       "&:hover": { color: variables.pinkred },
//                     }}
//                   />
//                 </div>
//               </div>
//               <div className="basic">
//                 <p>Bathrooms</p>
//                 <div className="basic_count">
//                   <RemoveCircleOutline
//                    onClick={() =>{bathroomCount>1 && setBathroomCount(bathroomCount -1)} }
//                     sx={{
//                       fontSize: "25px",
//                       cursor: "pointer",
//                       "&:hover": { color: variables.pinkred },
//                     }}
//                   />
//                   <p>{bathroomCount}</p>
//                   <AddCircleOutline
//                   onClick={ setBathroomCount(bathroomCount+1)} 
//                     sx={{
//                       fontSize: "25px",
//                       cursor: "pointer",
//                       "&:hover": { color: variables.pinkred },
//                     }}
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="create-listing_step2">
//             <h2>Step2: make your place stand out </h2>
//             <hr />
//             <h3>Tell guests what your place has to offer </h3>
//             <div className="amenities">
//               {facilities?.map((item, index) => (
//                 <div className="facility" key={index} onClick={() =>handleSelectAmenities()}>
//                   <div className="facility-icon">{item.icon}</div>
//                   <p>{item.name}</p>
//                 </div>
//               ))}
//             </div>
//             <h3> add some photos of your place </h3>

//             <DragDropContext onDragEnd={HandleDragPhoto}>
//               <Droppable droppableId="photos" direction="horizontal">
//                 {(provided) => (
//                   <div
//                     className="photos"
//                     {...provided.droppableProps}
//                     ref={provided.innerRef}
//                   >
//                     {photos.length < 1 && (
//                       <>
//                         <input
//                           id="image"
//                           type="file"
//                           style={{ display: "none" }}
//                           accept="image"
//                           onChange={handleUploadPhotos}
//                           multiple
//                         />
//                         <label htmlFor="image" className="alone">
//                           <div className="icon">
//                             <IoIosImages />
//                           </div>
//                           <p> Upload your device </p>
//                         </label>
//                       </>
//                     )}
//                     {/* photos.map((photo,index)) */}
//                     {photos.length >= 1 && (
//                       <>
//                         {photos.map((photo, index) => {
//                           return (
//                             <Draggable
//                               key={index}
//                               draggableId={index.toString()}
//                               index={index}
//                             >
//                               {(provided) => (
//                                 <div
//                                   className="photos"
//                                   ref={provided.innerRef}
//                                   {...provided.DragableProps}
//                                   {...provided.dragHandleProps}
//                                 >
//                                   <img
//                                     src={URL.createObjectURL(photo)}
//                                     alt="place"
//                                   />
//                                   <button
//                                     type="button"
//                                     onClick={() => handleRemovePhoto(index)}
//                                   >
//                                     <BiTrash />
//                                   </button>
//                                 </div>
//                               )}
//                             </Draggable>
//                           );
//                         })}
//                         <input
//                           id="image"
//                           type="file"
//                           style={{ display: "none" }}
//                           accept="image"
//                           onChange={handleUploadPhotos}
//                           multiple
//                         />
//                         <label htmlFor="image" className="together">
//                           <div className="icon">
//                             <IoIosImages />
//                           </div>
//                           <p> Upload from your device </p>
//                         </label>
//                       </>
//                     )}
//                   </div>
//                 )}
//               </Droppable>
//             </DragDropContext>
//             <h3> what make your place attractive and exciting ?</h3>
//             <div className="description">
//               <p>Title</p>
//               <input type="text" placeholder="Title" name="title" required />
//               <p>Description</p>
//               <textarea
//                 type="text"
//                 placeholder="Description"
//                 name="Description"
//                 required
//               />
//               <p>Highlight</p>
//               <input
//                 type="Highlight"
//                 placeholder="Highlight"
//                 name="Highlight"
//                 required
//               />
//               <p>Highlight Details</p>
//               <input
//                 type="text"
//                 placeholder="Highlight Details"
//                 name="HighlightDescription"
//                 required
//               />
//               <p>set your price</p>
//               <span>$</span>
//               <input
//                 type="number"
//                 placeholder="100"
//                 name="price"
//                 className="price"
//                 required
//               />
//             </div>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// };

// export default CreateListing;

import React, { useState } from "react";
import "../styles/Create_Listing.scss";
import Navbar from "../components/Navbar";
import { categories, types, facilities } from "../data";
import { RemoveCircleOutline, AddCircleOutline } from "@mui/icons-material";
import variables from "../styles/variables.scss";
import { IoIosImages } from "react-icons/io";
import { Draggable, Droppable, DragDropContext } from "react-beautiful-dnd";
import { BiTrash } from "react-icons/bi";
import { useSelector } from "react-redux";

const CreateListing = () => {
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [error, setError] = useState(null);

  const [formLocation, setFormLocation] = useState({
    streetAdddress: "",
    aptSuite: "",
    city: "",
    province: "",
    country: "",
  });

  const handleChangeLocation = (e) => {
    const { name, value } = e.target;
    setFormLocation({
      ...formLocation,
      [name]: value,
    });
    console.log(formLocation)
  };

  const [guestCount, setGuestCount] = useState(1);
  const [bedroomCount, setBedroomCount] = useState(1);
  const [bedCount, setBedCount] = useState(1);
  const [bathroomCount, setBathroomCount] = useState(1);
  const [amenities, setAmenities] = useState([]);

  const handleSelectAmenities = (facility) => {
    if (amenities.includes(facility)) {
      setAmenities((prevAmenities) =>
        prevAmenities.filter((option) => option !== facility)
      );
    } else {
      setAmenities((prev) => [...prev, facility]);
    }
  };

  const [photos, setPhotos] = useState([]);
  const handleUploadPhotos = (e) => {
    const newPhotos = Array.from(e.target.files); // Convert FileList to Array
    setPhotos((prevPhotos) => [...prevPhotos, ...newPhotos]);
  };

  const HandleDragPhoto = (result) => {
    if (!result.destination) return;
    const items = Array.from(photos);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setPhotos(items);
  };

  const handleRemovePhoto = (indexToRemove) => {
    setPhotos((prevPhotos) =>
      prevPhotos.filter((_, index) => index !== indexToRemove)
    );
  };

  const [formDescription, setFormDescription] = useState({
    title: "",
    description: "",
    highlight: "",
    highlightDescription: "",
    price: 0,
  });

  const handleChangeDescription = (e) => {
    const { name, value } = e.target;
    setFormDescription({
      ...formDescription,
      [name]: value,
    });
    console.log(formDescription)

  };

  const creatorId = useSelector((state) => (state.user ? state.user._id : null));

  const handlePost = async (e) => {
    e.preventDefault();
    try {
      const listingForm = new FormData();
      listingForm.append("creator", creatorId);
      listingForm.append("category", category);
      listingForm.append("type", type);
      listingForm.append("streetAddress", formLocation.streetAdddress);
      listingForm.append("aptSuite", formLocation.aptSuite);
      listingForm.append("city", formLocation.city);
      listingForm.append("province", formLocation.province);
      listingForm.append("country", formLocation.country);
      listingForm.append("guestCount", guestCount);
      listingForm.append("bedroomCount", bedroomCount);
      listingForm.append("bathroomCount", bathroomCount);
      listingForm.append("bedCount", bedCount);
      listingForm.append("amenities", amenities);
      listingForm.append("title", formDescription.title);
      listingForm.append("description", formDescription.description);
      listingForm.append("highlight", formDescription.highlight);
      listingForm.append("highlightDescription", formDescription.highlightDescription);
      listingForm.append("price", formDescription.price);
      photos.forEach((photo) => {
        listingForm.append("listingPhotos", photo);
      });
   

      const response = await fetch("http://localhost:3082/properties/create", {
        method: "POST",
        body:formLocation
      });

      if (!response.ok) {
        const errorData = await response.json();
        if (response.status === 409) {
          setError("A listing with this title already exists.");
        } else {
          setError(errorData.message || "An error occurred while creating the listing.");
        }
      } else {
        const responseData = await response.json();
        console.log("Success:", responseData);
      }
    } catch (error) {
      setError("Network error: " + error.message);
    }
  };

  return (
    <>
      <Navbar />
      <div className="create-listing">
        <h1>Publish your place</h1>
        <form onSubmit={handlePost} action="http://localhost:3082/properties/create" method="POST">
          <div className="create-listing_step1"></div>
          <h2>Step 1: Tell us about your place</h2>
          <hr />
          <h3>Which of these categories best describe your place</h3>
          <div className="category-list">
            {categories?.map((item, index) => (
              <div
                className={`category ${
                  category === item.label ? "selected" : ""
                }`}
                key={index}
                onClick={() => setCategory(item.label)}
              >
                <div className="category_icon">{item.icon}</div>
                <p>{item.label}</p>
              </div>
            ))}
          </div>
          <h3>What type of place will guests have?</h3>
          <div className="type-list">
            {types?.map((item, index) => (
              <div
                className={`type ${type === item.name ? "selected" : ""}`}
                key={index}
                onClick={() => setType(item.name)}
              >
                <div className="type_text">
                  <h4>{item.name}</h4>
                  <p>{item.description}</p>
                </div>
                <div className="type_icon">{item.icon}</div>
              </div>
            ))}
          </div>
          <h3>Where is your place located?</h3>
          <div className="location">
            <input
              type="text"
              placeholder="Street Address"
              name="streetAdddress"
              value={formLocation.streetAdddress}
              onChange={handleChangeLocation}
              required
            />
            <input
              type="text"
              placeholder="Apt, Suite, Bldg, (optional)"
              name="aptSuite"
              value={formLocation.aptSuite}
              onChange={handleChangeLocation}
            />
            <input
              type="text"
              placeholder="City"
              name="city"
              value={formLocation.city}
              onChange={handleChangeLocation}
              required
            />
            <input
              type="text"
              placeholder="Province"
              name="province"
              value={formLocation.province}
              onChange={handleChangeLocation}
              required
            />
            <input
              type="text"
              placeholder="Country"
              name="country"
              value={formLocation.country}
              onChange={handleChangeLocation}
              required
            />
          </div>
          <h3>Share some basics about your place</h3>
          <div className="basics">
            <div className="basic">
              <p>Guests</p>
              <div className="basic_count">
                <RemoveCircleOutline
                  onClick={() => {
                    guestCount > 1 && setGuestCount(guestCount - 1);
                  }}
                  sx={{
                    fontSize: "25px",
                    cursor: "pointer",
                    "&:hover": { color: variables.pinkred },
                  }}
                />
                <p>{guestCount}</p>
                <AddCircleOutline
                  onClick={() => setGuestCount(guestCount + 1)}
                  sx={{
                    fontSize: "25px",
                    cursor: "pointer",
                    "&:hover": { color: variables.pinkred },
                  }}
                />
              </div>
            </div>
            <div className="basic">
              <p>Bedrooms</p>
              <div className="basic_count">
                <RemoveCircleOutline
                  onClick={() => {
                    bedroomCount > 1 && setBedroomCount(bedroomCount - 1);
                  }}
                  sx={{
                    fontSize: "25px",
                    cursor: "pointer",
                    "&:hover": { color: variables.pinkred },
                  }}
                />
                <p>{bedroomCount}</p>
                <AddCircleOutline
                  onClick={() => setBedroomCount(bedroomCount + 1)}
                  sx={{
                    fontSize: "25px",
                    cursor: "pointer",
                    "&:hover": { color: variables.pinkred },
                  }}
                />
              </div>
            </div>
            <div className="basic">
              <p>Beds</p>
              <div className="basic_count">
                <RemoveCircleOutline
                  onClick={() => {
                    bedCount > 1 && setBedCount(bedCount - 1);
                  }}
                  sx={{
                    fontSize: "25px",
                    cursor: "pointer",
                    "&:hover": { color: variables.pinkred },
                  }}
                />
                <p>{bedCount}</p>
                <AddCircleOutline
                  onClick={() => setBedCount(bedCount + 1)}
                  sx={{
                    fontSize: "25px",
                    cursor: "pointer",
                    "&:hover": { color: variables.pinkred },
                  }}
                />
              </div>
            </div>
            <div className="basic">
              <p>Bathrooms</p>
              <div className="basic_count">
                <RemoveCircleOutline
                  onClick={() => {
                    bathroomCount > 1 && setBathroomCount(bathroomCount - 1);
                  }}
                  sx={{
                    fontSize: "25px",
                    cursor: "pointer",
                    "&:hover": { color: variables.pinkred },
                  }}
                />
                <p>{bathroomCount}</p>
                <AddCircleOutline
                  onClick={() => setBathroomCount(bathroomCount + 1)}
                  sx={{
                    fontSize: "25px",
                    cursor: "pointer",
                    "&:hover": { color: variables.pinkred },
                  }}
                />
              </div>
            </div>
          </div>
          <div className="create-listing_step2">
            <h2>Step 2: Make your place stand out</h2>
            <hr />
            <h3>Tell guests what your place has to offer</h3>
            <div className="amenities">
              {facilities?.map((item, index) => (
                <div
                  className={`facility ${
                    amenities.includes(item.name) ? "selected" : ""
                  }`}
                  key={index}
                  onClick={() => handleSelectAmenities(item.name)}
                >
                  <div className="facility-icon">{item.icon}</div>
                  <p>{item.name}</p>
                </div>
              ))}
            </div>
            <h3>Add some photos of your place</h3>
            <DragDropContext onDragEnd={HandleDragPhoto}>
              <Droppable droppableId="photos" direction="horizontal">
                {(provided) => (
                  <div
                    className="photos"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {photos.length < 1 && (
                      <>
                        <input
                          id="image"
                          type="file"
                          style={{ display: "none" }}
                          accept="image/*"
                          onChange={handleUploadPhotos}
                          multiple
                        />
                        <label htmlFor="image" className="alone">
                          <div className="icon">
                            <IoIosImages />
                          </div>
                          <p>Upload from your device</p>
                        </label>
                      </>
                    )}
                    {photos.length >= 1 && (
                      <>
                        {photos.map((photo, index) => (
                          <Draggable
                            key={index}
                            draggableId={index.toString()}
                            index={index}
                          >
                            {(provided) => (
                              <div
                                className="photo"
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                              >
                                <img
                                  src={URL.createObjectURL(photo)}
                                  alt="place"
                                />
                                <button
                                  type="button"
                                  onClick={() => handleRemovePhoto(index)}
                                >
                                  <BiTrash />
                                </button>
                              </div>
                            )}
                          </Draggable>
                        ))}
                        <input
                          id="image"
                          type="file"
                          style={{ display: "none" }}
                          accept="image/*"
                          onChange={handleUploadPhotos}
                          multiple
                        />
                        <label htmlFor="image" className="together">
                          <div className="icon">
                            <IoIosImages />
                          </div>
                          <p>Upload from your device</p>
                        </label>
                      </>
                    )}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
            <h3>What makes your place attractive and exciting?</h3>
            <div className="description">
              <input
                type="text"
                placeholder="Title"
                name="title"
                value={formDescription.title}
                onChange={handleChangeDescription}
                required
              />
              <textarea
                type="text"
                placeholder="Description"
                name="description"
                value={formDescription.description}
                onChange={handleChangeDescription}
                required
              />
              <input
                type="text"
                placeholder="Highlight"
                name="highlight"
                value={formDescription.highlight}
                onChange={handleChangeDescription}
                required
              />
              <input
                type="text"
                placeholder="Highlight Details"
                name="highlightDescription"
                value={formDescription.highlightDescription}
                onChange={handleChangeDescription}
                required
              />
              <p>Set your price</p>
              <span>$</span>
              <input
                type="number"
                placeholder="100"
                name="price"
                className="price"
                value={formDescription.price}
                onChange={handleChangeDescription}
                required
              />
            </div>
          </div>
          <button className="submit_btn" type="submit">
            Create Your Listing
          </button>
          {error && <div className="error">{error}</div>}
        </form>
      </div>
    </>
  );
};

export default CreateListing;