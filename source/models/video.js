import mongoose from "mongoose";
import mongoose, { Schema } from "mongoose";
import { UserSchema } from "./user";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const VideoSchema = new Schema({
    videoID : {
        type : String,
        required : true,
        Video_index : true
    },
    videoFile : {
        type : String,
        required : true,
    },
    thumbnail : {
        type : String,
        required : true,
    },
    VideoOwner : {
        type : Schema.Types.ObjectId,
        reference : "USER",
        required : true,
    },
    views : {
        type : Number,
        required : true,
        default : 0
    },
    createdAt : {
        type : Date,
        required : true,
    },
},{timestamps : true})

VideoSchema.plugin(mongooseAggregatePaginate)

const VideoModel = mongoose.model("VIDEO",VideoSchema)

export {VideoModel}