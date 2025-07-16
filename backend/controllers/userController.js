import validator from 'validator';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import userModel from '../models/userModel.js'


const createToken=(id)=>{
  // console.log('create Token called')
  return jwt.sign({id},process.env.JWT_SECRET)
}

const loginUser=async (req,res)=>{
    try{
   
    const {email,password}=req.body;
    const user= await userModel.findOne({email});

    if(!user){
        return res.json({success:false,msg:"user doesnt exist"});
    }

    const isMatch=await bcrypt.compare(password,user.password);

    if(!isMatch){
      
        res.json({success:false,msg:"invalid credintials"});
    }
    else{
        const token=createToken(user._id);
        res.json({success:true,token});
    }

    }catch(error){
      res.json({success:false,message:error.message});
    }

}

// Register user
const registerUser = async (req, res) => {
    try {
      const { name, email, password } = req.body;
  
      // Validate all fields
      if (!name || !email || !password) {
        return res.status(400).json({ success: false, message: "All fields are required" });
      }
  
      
  
  
      // Check if the user already exists
      const exists = await userModel.findOne({ email });
      if (exists) {
        return res.status(409).json({ success: false, message: `${email} is already registered` });
      }
  
      // Validate email format
      if (!validator.isEmail(email)) {
        return res.status(400).json({ success: false, message: "Please enter a valid email" });
      }
      
  
      // Validate password length
      if (password.length < 8) {
        return res.status(400).json({ success: false, message: "Password must be at least 8 characters long" });
      }
  
      // Hash password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
  
      // Create a new user
      const newUser = new userModel({
        name,
        email,
        password: hashedPassword,
      });
  
      // Save the new user to the database
      const user = await newUser.save();
  
      // Create a token
      const token = createToken(user._id);
  
      return res.status(201).json({
        success: true,
        token,
       
      });
    } catch (error) {
      console.error("Error during registration:", error);
      return res.status(500).json({ success: false, message: "Internal server error" });
    }
  };
  


  const adminLogin=async(req,res)=>{
    try{
      const {email,password}=req.body;
      console.log(email,password);
  
      if(!email || !password){
        res.json({success:false, message:"Missing necessary fields"});
      }
  
      if(email===process.env.ADMIN_EMAIL && password===process.env.ADMIN_PASSWORD){
          const token=jwt.sign(email+password,process.env.JWT_SECRET);
          res.json({success:true,token})
      }
      else{
        res.json({success:false, message:"Invalid credentials"});
      }
    }
    catch(error){
      console.log(error)
      res.json({success:false,message:error.message})
    }
  }
  
  

export {loginUser,registerUser,adminLogin};