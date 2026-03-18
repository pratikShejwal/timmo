import jwt from "jsonwebtoken"

const isLoggedIn = async (req, res, next) => {
    const token = req.cookies.token
    if(!token){
        return res.status(401).json({
            msg: "you need to login at first"
        })
    } else {
        try{
            const data = jwt.verify(token, process.env.JWT_SECRET)
            req.user = data
            next()
        } catch (err){
            console.log("error in islogged in  middleware : ", err);
        }
    }

    
}

export {isLoggedIn}