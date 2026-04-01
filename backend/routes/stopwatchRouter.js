import express from "express"
const stopwatchRouter = express.Router()
import stopwatchModel from "../model/stopwatch.js"
import userModel from "../model/user.js"
import { isLoggedIn } from "../middlewares/isLoggedIn.js"


stopwatchRouter.post("/save", async (req, res) => {
    try{
        const {totalTime} = req.body

        console.log("DECODED TOKEN:", req.user);
        const user = await userModel.findOne({email: req.user.email})

        if (!totalTime || totalTime <= 0) {
            return res.status(400).json({ message: "Invalid time" });
        }

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const total = await stopwatchModel.create({
            totalTime: totalTime,
            userId: user._id,
            date: new Date().toISOString().split("T")[0]
        })

        res.status(200).send({
            stopwatchTime: total,
            msg: "total time saved"
        })
    } catch(err){
        console.log("error while start in backend", err);
        res.status(500).json({ message: "Server error" });
    }
})



stopwatchRouter.get("/daily", async (req, res) => {
    try{
         const user = await userModel.findOne({
            email: req.user.email
        });

        const data = await stopwatchModel.aggregate([
            {
                $match: { userId: user._id }
            },
            {
                $group: {
                    _id: "$date",
                    totalTime: { $sum: "$totalTime" }
                }
            },
            {
                $sort: { _id: 1 }
            }
        ]);

        res.status(200).json(data);

    } catch(err){
        console.log("error while getting daily stopwatch total time: ", err);
        res.status(500).json({ message: "Server error" });
    }
})




export default stopwatchRouter