import mongoose from "mongoose";
//mongoose is an object, Schema is a class
//these specifications are there in the data moodel screenshot
//When you create a new schema using new mongoose.Schema(), you are effectively creating an instance of the Schema class.
const UserSchema=new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        min: 2,
        max: 50,
    },
    lastName: {
        type: String,
        required: true,
        min: 2,
        max: 50,
    },
    email: {
        type: String,
        required: true,
        max: 50,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        min: 50,
    },
    picturePath: {
        type: String,
        default: "",
    },
    friends:{
        type: Array,
        default: []
    },
    location: String,
    occupation: String,
    viewedProfile: Number,
    impressions: Number,
},{timestamps: true});

const User=mongoose.model("User",UserSchema);
//In Mongoose, model is a function that creates a model class
export default User;