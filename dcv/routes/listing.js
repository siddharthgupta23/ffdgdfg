// const router = require("express").Router();
// const multer = require("multer");
// const Listing = require("../models/Listing");
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "public/uploads/");
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname);
//   },
// });
// const upload = multer({ storage });
// const User=require("../models/User")
// router.post("/create", upload.array("listingPhotos"), async (req, res) => {
//   try {
//     const {
//       creator,
//       category,
//       type,
//       streetAddress,
//       aptSuite,
//       city,
//       province,
//       country,
//       guestCount,
//       bedroomCount,
//       bedCount,
//       bathroomCount,
//       amenities,
//       title,
//       description,
//       highlight,
//       highlightDescription,
//       price,
//     } = req.body;
   
//     const listingPhotos=req.files
//     if(!listingPhotos)
//     {
//         return res.status(400).send(" No file Uploaded")
//     }
//     const listingPhotoPaths=listingPhotoPaths.map((file)=>file.path)

//     const newListing =newListing({
//       creator,
//       category,
//       type,
//       streetAddress,
//       aptSuite,
//       city,
//       province,
//       country,
//       guestCount,
//       bedroomCount,
//       bedCount,
//       bathroomCount,
//       amenities,
//       listingPhotoPaths,
//       title,
//       description,
//       highlight,
//       highlightDescription,
//       price,
//     })
//  await newListing.save()
//  res.status(200).json(newListing)
//   } 
//   catch (err) {
//     res.status(409).json({message:" fail to create Listing",error:err.message})
//     console.log(err)
//   }
// });
// router.get("/",async (req,res)=>{
//     const qCategory = req.query.category
//     try{
//      let listings
//       if(qCategory)
//       {
//         listings=await Listing.find({ category:qCategory }).populate("creator")
//       }
//       else{
//         listings=await Listing.find()
//       }
//       res.status(200).json(listings)
//     }catch(err)
//     {
//         res.status(404).json({message: "fail to fetch listings ",error:err.message})
//         console.log(err)

//     }
// })
// module.exports=router
// const router = require("express").Router();
// const multer = require("multer");
// const Listing = require("../models/Listing");

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "public/uploads/");
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname);
//   },
// });

// const upload = multer({ storage });
// const User = require("../models/User");

// router.post("/create", upload.array("listingPhotos"), async (req, res) => {
//   try {
//     const {
//       creator,
//       category,
//       type,
//       streetAddress,
//       aptSuite,
//       city,
//       province,
//       country,
//       guestCount,
//       bedroomCount,
//       bedCount,
//       bathroomCount,
//       amenities,
//       title,
//       description,
//       highlight,
//       highlightDescription,
//       price,
//     } = req.body;

//     const listingPhotos = req.files;
//     if (!listingPhotos) {
//       return res.status(400).send("No files uploaded");
//     }

//     const listingPhotoPaths = listingPhotos.map((file) => file.path);

//     const newListing = new Listing({
//       creator,
//       category,
//       type,
//       streetAddress,
//       aptSuite,
//       city,
//       province,
//       country,
//       guestCount,
//       bedroomCount,
//       bedCount,
//       bathroomCount,
//       amenities,
//       listingPhotoPaths,
//       title,
//       description,
//       highlight,
//       highlightDescription,
//       price,
//     });

//     await newListing.save();
//     res.status(200).json(newListing);
//   } catch (err) {
//     res.status(409).json({ message: "Failed to create listing", error: err.message });
//     console.log(err);
//   }
// });

// router.get("/", async (req, res) => {
//   const qCategory = req.query.category;
//   try {
//     let listings;
//     if (qCategory) {
//       listings = await Listing.find({ category: qCategory }).populate("creator");
//     } else {
//       listings = await Listing.find();
//     }
//     res.status(200).json(listings);
//   } catch (err) {
//     res.status(404).json({ message: "Failed to fetch listings", error: err.message });
//     console.log(err);
//   }
// });

// module.exports = router;
// const router = require("express").Router();
// const multer = require("multer");

// const Listing = require("../models/Listing");
// const User = require("../models/User")

// /* Configuration Multer for File Upload */
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "public/uploads/"); // Store uploaded files in the 'uploads' folder
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname); // Use the original file name
//   },
// });

// const upload = multer({ storage });

// /* CREATE LISTING */
// router.post("/create", upload.array("listingPhotos"), async (req, res) => {
//   try {
//     /* Take the information from the form */
//     const {
//       creator,
//       category,
//       type,
//       streetAddress,
//       aptSuite,
//       city,
//       province,
//       country,
//       guestCount,
//       bedroomCount,
//       bedCount,
//       bathroomCount,
//       amenities,
//       title,
//       description,
//       highlight,
//       highlightDescription,
//       price,
//     } = req.body;

//     const listingPhotos = req.files

//     if (!listingPhotos) {
//       return res.status(400).send("No file uploaded.")
//     }

//     const listingPhotoPaths = listingPhotos.map((file) => file.path)

//     const newListing = new Listing({
//       creator,
//       category,
//       type,
//       streetAddress,
//       aptSuite,
//       city,
//       province,
//       country,
//       guestCount,
//       bedroomCount,
//       bedCount,
//       bathroomCount,
//       amenities,
//       listingPhotoPaths,
//       title,
//       description,
//       highlight,
//       highlightDescription,
//       price,
//     })

//     await newListing.save()

//     res.status(200).json(newListing)
//   } catch (err) {
//     res.status(409).json({ message: "Fail to create Listing", error: err.message })
//     console.log(err)
//   }
// });

// /* GET lISTINGS BY CATEGORY */
// router.get("/", async (req, res) => {
//   const qCategory = req.query.category

//   try {
//     let listings
//     if (qCategory) {
//       listings = await Listing.find({ category: qCategory }).populate("creator")
//     } else {
//       listings = await Listing.find().populate("creator")
//     }

//     res.status(200).json(listings)
//   } catch (err) {
//     res.status(404).json({ message: "Fail to fetch listings", error: err.message })
//     console.log(err)
//   }
// })

// /* GET LISTINGS BY SEARCH */
// router.get("/search/:search", async (req, res) => {
//   const { search } = req.params

//   try {
//     let listings = []

//     if (search === "all") {
//       listings = await Listing.find().populate("creator")
//     } else 
//       listings = await Listing.find({
//         $or: [
//           { category: {$regex: search, $options: "i" } },
//           { title: {$regex: search, $options: "i" } },
//         ]
//       }).populate("creator")
//     }

//     res.status(200).json(listings)
//   } catch (err) {
//     res.status(404).json({ message: "Fail to fetch listings", error: err.message })
//     console.log(err)
//   }
// })

// /* LISTING DETAILS */
// router.get("/:listingId", async (req, res) => {
//   try {
//     const { listingId } = req.params
//     const listing = await Listing.findById(listingId).populate("creator")
//     res.status(202).json(listing)
//   } catch (err) {
//     res.status(404).json({ message: "Listing can not found!", error: err.message })
//   }
// })


// const router = require("express").Router();
// const multer = require("multer");
// const path = require("path");
// const Listing = require("../models/Listing");
// const User = require("../models/User");


// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, path.join(__dirname, "..", "public/uploads"));
    
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname);
//   }
// });
// const upload = multer({ storage });

// // Route to create a new listing
// router.post("/create", upload.array("listingPhotos"), async (req, res) => {
//   try {
//     const {
//        creator,
//        category,
//        type,
//        streetAddress,
//        aptSuite,
//        city,
//        province,
//        country,
//        guestCount,
//        bedroomCount,
//        bedCount,
//        bathroomCount,
//        amenities,
//        title,
//        description,
//      highlight,
//        highlightDescription,
//       price,
//     } = req.body;
//     console.log(req.body)

//     const listingPhotos = req.files;

//     if (!listingPhotos) {
//       return res.status(400).send("No file uploaded.");
//     }

//     const listingPhotoPaths = listingPhotos.map((file) => file.path);

//     const newListing = new Listing({
//       creator,
//       category,
//       type,
//       streetAddress,
//       aptSuite,
//       city,
//       province,
//       country,
//       guestCount,
//       bedroomCount,
//       bedCount,
//       bathroomCount,
//       amenities,
//       listingPhotoPaths,
//       title,
//       description,
//       highlight,
//       highlightDescription,
//       price,
//     });

//     await newListing.save();

//     res.status(200).json(newListing);
//   } catch (err) {
//     console.error(err.stack);
//     res.status(409).json({ message: "Failed to create listing", error: err.message });
//   }
// });


// router.get("/", async (req, res) => {
//   const qCategory = req.query.category;

//   try {
//     let listings;
//     if (qCategory) {
//       listings = await Listing.find({ category: qCategory }).populate("creator");
//     } else {
//       listings = await Listing.find().populate("creator");
//     }

//     res.status(200).json(listings);
//   } catch (err) {
//     res.status(404).json({ message: "Failed to fetch listings", error: err.message });
//     console.log(err);
//   }
// });


// router.get("/search/:search", async (req, res) => {
//   const { search } = req.params;

//   try {
//     let listings = [];

//     if (search === "all") {
//       listings = await Listing.find().populate("creator");
//     } else {
//       listings = await Listing.find({
//         $or: [
//           { category: { $regex: search, $options: "i" } },
//           { title: { $regex: search, $options: "i" } },
//         ]
//       }).populate("creator");
//     }

//     res.status(200).json(listings);
//   } catch (err) {
//     res.status(404).json({ message: "Failed to fetch listings", error: err.message });
//     console.log(err);
//   }
// });


// router.get("/:listingId", async (req, res) => {
//   try {
//     const { listingId } = req.params;
//     const listing = await Listing.findById(listingId).populate("creator");
//     res.status(202).json(listing);
//   } catch (err) {
//     res.status(404).json({ message: "Listing not found!", error: err.message });
//   }
// });

// module.exports = router;
// const express = require('express');
// const app = express();
const router = require("express").Router();

const multer = require("multer");
const path = require("path");
const Listing = require("../models/Listing");
const mongoose = require("mongoose");
const User = require("../models/User");


// app.use(express.static(path.join(__dirname, '..', 'public')));


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "..", "public/uploads"));
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});
const upload = multer({ storage });

// Middleware to validate listing ID
const validateListingId = (req, res, next) => {
  const { listingId } = req.params;
  if (!mongoose.Types.ObjectId.isValid(listingId)) {
    return res.status(400).json({ message: "Invalid listing ID format" });
  }
  next();
};

// Route to create a new listing
router.post("/create", upload.array("listingPhotos"), async (req, res) => {
  try {
    const {
      creator,
      category,
      type,
      streetAddress,
      aptSuite,
      city,
      province,
      country,
      guestCount,
      bedroomCount,
      bedCount,
      bathroomCount,
      amenities,
      title,
      description,
      highlight,
      highlightDescription,
      price,
    } = req.body;
    console.log(req.body);

    const listingPhotos = req.files;


    const listingPhotoPaths = listingPhotos.map(file => `public/uploads/${file.originalname}`);

    // const listingPhotoPaths = listingPhotos.map(file => `${req.protocol}://${req.get('host')}/uploads/${file.originalname}`);

 
    listingPhotoPaths.forEach((path, index) => {
      listingPhotoPaths[index] = `public${path}`;
    });

    if (!listingPhotos) {
      return res.status(400).send("No file uploaded.");
    }

    const PropertySchema = new mongoose.Schema({
      creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
      category: { type: String, required: true },
      type: { type: String, required: true },
      streetAddress: { type: String, required: true },
      aptSuite: { type: String },
      city: { type: String, required: true },
      province: { type: String, required: true },
      country: { type: String, required: true },
      guestCount: { type: Number, required: true },
      bedroomCount: { type: Number, required: true },
      bathroomCount: { type: Number, required: true },
      bedCount: { type: Number, required: true },
      amenities: { type: [String], required: true },
      title: { type: String, required: true },
      description: { type: String, required: true },
      highlight: { type: String },
      highlightDescription: { type: String },
      price: { type: Number, required: true },
      listingPhotos: { type: [String], required: true },
    }, { timestamps: true });
    module.exports = mongoose.model('Property', PropertySchema);
    


    const newListing = new Listing({
      creator,
      category,
      type,
      streetAddress,
      aptSuite,
      city,
      province,
      country,
      guestCount,
      bedroomCount,
      bedCount,
      bathroomCount,
      amenities,
      listingPhotoPaths,
      title,
      description,
      highlight,
      highlightDescription,
      price,
    });

    await newListing.save();

    res.status(200).json(newListing);
  } catch (err) {
    console.error(err.stack);
    res.status(409).json({ message: "Failed to create listing", error: err.message });
  }
  });

router.get("/", async (req, res) => {
  const qCategory = req.query.category;

  try {
    let listings;
    if (qCategory) {
      listings = await Listing.find({ category: qCategory }).populate("creator");
    } else {
      listings = await Listing.find().populate("creator");
    }

    res.status(200).json(listings);
  } catch (err) {
    res.status(404).json({ message: "Failed to fetch listings", error: err.message });
    console.log(err);
  }
});
router.get('/images/:filename', (req, res) => {
  const { filename } = req.params;
  const imagePath = path.join(__dirname, '..', 'public', 'uploads', filename);
  res.sendFile(imagePath);
});

router.get("/search/:search", async (req, res) => {
  const { search } = req.params;

  try {
    let listings = [];

    if (search === "all") {
      listings = await Listing.find().populate("creator");
    } else {
      listings = await Listing.find({
        $or: [
          { category: { $regex: search, $options: "i" } },
          { title: { $regex: search, $options: "i" } },
        ]
      }).populate("creator");
    }

    res.status(200).json(listings);
  } catch (err) {
    res.status(404).json({ message: "Failed to fetch listings", error: err.message });
    console.log(err);
  }
});

router.get("/:listingId", validateListingId, async (req, res) => {
  try {
    const { listingId } = req.params;

    const listing = await Listing.findById(listingId).populate("creator");
    if (!listing) {
      return res.status(404).json({ message: "Listing not found!" });
    }
    res.status(200).json(listing);
  } catch (err) {
    res.status(404).json({ message: "Listing not found!", error: err.message });
  }
});

module.exports = router;
