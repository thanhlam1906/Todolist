import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        trim: true// remove whitespace
    },
    status: {
        type: String,
        enum: ['active', 'completed'],
        default: 'active'
    },
    completedAt: {
        type: Date,
        default: null
    }

    
},
{  timestamps: true } // createdAt, updatedAt automatically managed by mongoose
);

const Task = mongoose.model("Task", taskSchema);

export default Task;