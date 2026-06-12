import mongoose from "mongoose"

const leaderboardSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },

    todayTime: {
        type: Number,
        default: 0
    },

    streak: {
        type: Number,
        default: 0
    },

    lastActiveDate: {
        type: String
    }

}, { timestamps: true });


export default mongoose.model("leaderboard", leaderboardSchema)