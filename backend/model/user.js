import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    }, 
    password: {
        type: String,
        required: true
    },
    todoId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "todo"
    }]
}, {timestamps: true})

export default mongoose.model("user", userSchema)