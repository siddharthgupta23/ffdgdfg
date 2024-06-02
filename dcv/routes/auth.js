// const router =require("express").Router()
// const bcrypt= require("bcryptjs")
// const jwt=require("jsonwebtoken")
// const multer=require("multer")
// const User=require("../models/User")

// const storage=multer.diskStorage({
//     destination:function(req,file,cb){
//         cb(null,"public/uploads/")
//     },
// filename: function(req,file,cb)
// {
//     cb(null,file.originalname)
// }
// })
// const upload=multer({storage})

// router.post("/register",upload.single('profile_image'),async(req,res)=>{
// try{
//  const{ Firstname,Lastname,email,password}=req.body
//  const profile_image=req.file
//  if(!profile_image)
//  {
//     return res.status(400).send("No file Uploaded")
//  }
//  const profileImagePath=profile_image.path
//  const existingUser=await User.findOne({email})
//  if(existingUser)
//  {
//     return res.status(409).json({message:"User already exists"})

//  }
//  const salt=await bcrypt.genSalt()
//  const hashedPassword =await bcrypt.hash(password,salt)

//  const newUser= new User({
//     Firstname,
//     Lastname,
//     email,
//     password,
//     profileImagePath,
// });

// await newUser.save()

// res.status(200).json({message:"User registered  successfully",user:newUser} )
// }catch(err)
// {
// console.log(err)
// res.status(500).json({ message:"Registration failed!",error:err.message})
// }
// }
// )
// router.post("/login",async(req,res)=>

// {
//     try{
//      const[email,password]=req.body
    
//         const User=await User.findOne({email})
//  if(!User)
//  {
//     return res.status(409).json({message:"User already exists"})

//  }
//  const ismatch=await bcrypt.compare(password,User.password)
//  if(!ismatch){

// return res.status(400).json({message:"User Does not exist "})
//     }
//     const token=jwt.sign({id:user_id},process.env.JWT_SECRET)
//     }
//     delete User.password
//     res.status(400).json({token,User})

//     catch(err){
// }
// }
// )
// module.exports=router
const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const User = require("../models/User");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

router.post("/register", upload.single("profile_image"), async (req, res) => {
  try {
    const { Firstname, Lastname, email, password } = req.body;
    const profile_image = req.file;

    if (!profile_image) {
      return res.status(400).send("No file uploaded");
    }

    const profileImagePath = profile_image.path;
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      Firstname,
      Lastname,
      email,
      password: hashedPassword,
      profileImagePath,
    });

    await newUser.save();

    res.status(200).json({ message: "User registered successfully", user: newUser });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Registration failed!", error: err.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const foundUser = await User.findOne({ email });

    if (!foundUser) {
      return res.status(400).json({ message: "User does not exist" });
    }

    const isMatch = await bcrypt.compare(password, foundUser.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }

    const token = jwt.sign({ id: foundUser._id }, process.env.JWT_SECRET);

    delete foundUser.password;

    res.status(200).json({ token, user: foundUser });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Login failed!", error: err.message });
  }
});

module.exports = router;
