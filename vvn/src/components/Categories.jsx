// import React from 'react'
// import{categories} from "../data"
// import "../styles/Categories.scss"
// import {Link} from 'react-router-dom'
// const Categories = () => {
//   return (
 
//       <div className="categories">
//      <h1>Explore our top Categories </h1>
//      <p>Explore our wide range of vacations rrentals that caters to all the types of travellers .Immerse yourself in the local culture ,enjoy conforts of home ,create unforegettable memories in the dream deignation</p>
//        <div className="categories_list"></div>
//        {categories?.slice(1,7).map((category,index)=>(
//         <Link to="">
//             <Link to={`/properties/category/${category.label}`} key={index}>
//                 <img src={category.img} alt={category.label  }/>
//                 <div className="overlay"></div>
//                 <div className="category-text">
//                 <div className="category-text-icon">{category.icon}</div>
//                 <p>{category.label}</p>
//                 </div>
            
//             </Link>
//         </Link>
//        ))}
//        </div>
    
   
//   )
// }

// export default Categories

import React from 'react';
import { categories } from "../data";
import "../styles/Categories.scss";
import { Link } from 'react-router-dom';

const Categories = () => {
  return (
    <div className="categories">
      <h1>Explore our top Categories</h1>
      <p>Explore our wide range of vacation rentals that cater to all types of travelers. Immerse yourself in the local culture, enjoy comforts of home, and create unforgettable memories in the dream designation.</p>
      <div className="categories_list">
        {categories?.slice(1, 7).map((category, index) => (
          <Link to={`/properties/category/${category.label}`} key={index}>
            <div className="category">
              <img src={category.img} alt={category.label} />
              <div className="overlay"></div>
              <div className="category-text">
                <div className="category-text-icon">{category.icon}</div>
                <p>{category.label}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
