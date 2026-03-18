import mongoose from "mongoose";

const ConectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDB is connected");
    
    } catch(err){
        console.log("error while connecting mongoDB: ", err);
    }
}

export {ConectDB}