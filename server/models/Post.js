/* _id propoerty is automatically generated by mongodb */
/* this file deals with the post of a particular user */
import mongoose from "mongoose";
const postSchema= mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    location: String,
    description: String,
    picturePath: String,
    userPicturePath: String,
    likes: {
        type: Map,
        of: Boolean,
    },/*likes stores whether diff users have liked the post or not? */
    comments: {
        type: Array,
        default: []
    }
},{timestamps: true});

const Post=mongoose.model("Post",postSchema);
export default Post;