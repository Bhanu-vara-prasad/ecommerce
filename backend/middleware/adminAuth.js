
import jwt from 'jsonwebtoken'

const adminAuth=async(req,res,next)=>{
  try{
    const {token}=req.headers
    console.log(token);
    if(!token){
      return res.json({ success: false, message: "Not authorized login again" })
    }


    const tokenDecode=jwt.verify(token,process.env.JWT_SECRET);

    if(tokenDecode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD){
      return res.json({ success: false, message: "Not authorized login again" })
    }
    next()
  }
  catch (error) {
    console.error( error);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
}

export default adminAuth;

