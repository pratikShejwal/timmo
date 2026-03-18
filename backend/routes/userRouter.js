import express from "express"
const userRouter = express.Router()
import userModel from "../model/user.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
// import z from "zod"


//sign up 
userRouter.post("/signup", async (req, res) => {
    try{
        // const requireData = z.object({
        //     email: z.string().min(1).max(100).email(),
        //     password: z.string().min(2).max(50),
        //     name: z.string().min(2).max(100)
        // })
        // const parseData = requireData.safeParse(req.body)
        // if(!parseData.success){
        //     return res.status(400).json({
        //         msg: "invalid inputs",
        //         err: parseData.error.format()
        //     })
        // }


        const {name, email, password} = req.body

        if(!name || !email || !password){
            return res.status(400).json({
                success: false,
                msg: "All fields are required"
            })
        }

        const user = await userModel.findOne({email})
        if(user){
            return res.status(409).json({
                success: false,
                msg: "User already exist"
            })
        }
        const hash = await bcrypt.hash(password, 10)
        await userModel.create({
            name: name,
            email: email,
            password: hash
        })
        const token = jwt.sign({email: req.body.email}, process.env.JWT_SECRET)
        res.cookie("token", token)

        return res.status(201).json({
            success: true,
            token: token, 
            msg: "Account successfully created"
        })

    } catch(err){
        console.log("error:", err);
        return res.status(500).json({
            success: false,
            msg: "Server error signup"
        });
    }
    
})



// login
userRouter.post("/login", async (req, res) => {
    try{
        const {email, password} = req.body
        if(!email || !password){
            return res.status(400).json({
                success: false,
                msg: "All fields are required"
            })
        }
        const user = await userModel.findOne({email})
        if(!user){
            return res.status(404).json({
                success: false,
                msg: "User doesn't exist"
            })
        }
        bcrypt.compare(password, user.password, (err, result) => {
            if(result){
                const token = jwt.sign({email}, process.env.JWT_SECRET)
                res.cookie("token", token)
                return res.status(200).json({
                    success: true,
                    user: user,
                    token: token, 
                    msg: `Login successful, welcome back ${user.name}`
                })
            } else {
                return res.status(401).json({
                    success: false,
                    msg: "Wrong password"
                })
            }
        })

    } catch(err){
        console.log("error:", err);
        return res.status(500).json({
            success: false,
            msg: "Server error login"
        });
    }
})




//logout
userRouter.post("/logout", async (req, res) => {
    res.cookie("token", "")
    return res.status(200).json({
        success: true,
        msg: "Logout successful"
    })
})




// get user data
userRouter.get("/me", async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({
        success: false,
        msg: "No token provided"
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await userModel.findOne({ email: decoded.email }).select("-password");

    if (!user) {
      return res.status(404).json({
        success: false,
        msg: "User not found"
      });
    }

    return res.status(200).json({
      success: true,
      user
    });

  } catch (err) {
    return res.status(401).json({
      success: false,
      msg: "Invalid token"
    });
  }
});




export default userRouter