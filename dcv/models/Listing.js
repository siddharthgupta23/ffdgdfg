//const mongoose= require("mongoose")
// const ListingSchema= new mongoose.Schema(
//     {
//         creator:{
//            type: mongoose.Schema.Types.ObjectId,
//            ref:'User',


//         },
//         category:{
//             type:String,
//             required:true,

//         },
//         streetAddress:{
//             type:String,
//             required:true,
//         }, 
//         aptSuite:{
//             type:String,
//             required:true,
//         }, 
//         city:{
//             type:String,
//             required:true,
//         },
//          province:{
//             type:String,
//             required:true,
//         }, 
//         country:{
//             type:String,
//             required:true,
//         },
//         guestCount:{
//          type:Number,
//          required:true,

//         },
//         bedrooomCount:{
//             type:Number,
//             required:true,
   
//            },
//            bedCount:{
//             type:Number,
//             required:true,
   
//            },
//            bathroomCount:{
//             type:Number,
//             required:true,
   
//            },
//            amenities:{
//             type:Array,
//             required:[{}],
   
//            },
//            listingPhotoPaths:[{type:String}],
//            title:{
//             type:String,
//             required:true,
//            },
//            description:{
//             type:String,
//             required:true,
//            },
//            highlightDescription:{
//             type:String,
//             required:true,

//            },price:{
//             type:String,
//             required:true,

//            }
//     },
//     {timestamps :true}
// )
// const Listing= mongoose.model("Listing",ListingSchema)
// module.exports=Listing
// const ListingSchema = new mongoose.Schema(
//     {
//       creator: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "User",
//       },
//       category: {
//         type: String,
//         required: true,
//       },
//       streetAddress: {
//         type: String,
//         required: true,
//       },
//       aptSuite: {
//         type: String,
//         required: true,
//       },
//       city: {
//         type: String,
//         required: true,
//       },
//       province: {
//         type: String,
//         required: true,
//       },
//       country: {
//         type: String,
//         required: true,
//       },
//       guestCount: {
//         type: Number,
//         required: true,
//       },
//       bedroomCount: {
//         type: Number,
//         required: true,
//       },
//       bedCount: {
//         type: Number,
//         required: true,
//       },
//       bathroomCount: {
//         type: Number,
//         required: true,
//       },
//       amenities: {
//         type: Array,
//         required: [{}]
//       },
//       listingPhotoPaths: [{ type: String }],
//       title: {
//         type: String,
//         required: true,
//       },
//       description: {
//         type: String,
//         required: true,
//       },
//       highlightDescription: {
//         type: String,
//         required: true,
//       },
//       price: {
//         type: String,
//         required: true,
//       }
//     },
//     {
//       timestamps: true,
//     }
//   );
  
//   ListingSchema.index({ listingPhotoPaths: 1 }, { unique: true });
  
//   const Listing = mongoose.model("Listing", ListingSchema);
  
//   module.exports = Listing;
const mongoose = require("mongoose");

const ListingSchema = new mongoose.Schema({
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  streetAddress: {
    type: String,
    required: true,
  },
  aptSuite: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  province: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  guestCount: {
    type: Number,
    required: true,
  },
  bedroomCount: {
    type: Number,
    required: true,
  },
  bedCount: {
    type: Number,
    required: true,
  },
  bathroomCount: {
    type: Number,
    required: true,
  },
  amenities: {
    type: [String],
    default: []
  },
  listingPhotoPaths: [{
    type: String
  }],
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  highlight: {
    type: String,
    required: true,
  },
  highlightDescription: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  }
}, { timestamps: true });

const Listing = mongoose.model("Listing", ListingSchema);
module.exports = Listing;
