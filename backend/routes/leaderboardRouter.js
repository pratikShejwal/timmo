import express from "express"
const leaderboardRoute = express.Router()
import countdownModel from "../model/countdown.js"
import stopwatchModel from "../model/stopwatch.js"
import userModel from "../model/user.js"
import leaderboardModel from "../model/leaderboard.js"


leaderboardRoute.get("/", async (req, res) => {
    try{
        
        const topUsers = await leaderboardModel
            .find()
            .sort({ 
                todayTime: -1,
                streak: -1
            })
            .limit(100)
            .populate("userId", "name");

        const leaderboard = topUsers.map((user, index) => ({
            rank: index + 1,
            name: user.userId?.name,
            todayTime: user.todayTime,
            streak: user.streak
        }))
        
        res.status(200).json({
            success: true,
            leaderboard
        });


    }  catch (err) {
        console.log("Error calculating leaderboard data:", err);

        res.status(500).json({
        success: false,
        message: "Server error",
        });
   
    }

})


leaderboardRoute.get("/me", async (req, res) => {

    const user = await userModel.findOne({
        email: req.user.email
    });

    const me =
        await leaderboardModel.findOne({
            userId: user._id
        });

    const rank =
        await leaderboardModel.countDocuments({
            todayTime: { $gt: me.todayTime }
        }) + 1;

    const totalUsers =
        await leaderboardModel.countDocuments();

    const focusedMoreThan =
        Math.round(
            ((totalUsers - rank) / totalUsers) * 100
        );
    
    const percentile = Math.max(
        1,
        100 - focusedMoreThan
    );

    res.json({
        rank,
        focusedMoreThan,
        percentile,
        todayTime: me.todayTime,
        streak: me.streak
    });
});


export default leaderboardRoute
