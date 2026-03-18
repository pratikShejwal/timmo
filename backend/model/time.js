import mongoose from "mongoose";

const timeSchema = mongoose.Schema({

}, {timestamps: true})

export default mongoose.model("time", timeSchema)