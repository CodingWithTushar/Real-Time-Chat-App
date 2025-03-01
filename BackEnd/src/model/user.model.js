import mongoose from "mongoose";
const model = mongoose.model;
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: { type: String, required: true, unique: true },
  fullName: { type: String, required: true },
  password: { type: String, required: true, minlength: 6 },
  profilePic: {type: String , default: "" }
}, {timestamps: true});

const UserModel = model("User" , UserSchema);


export default UserModel 

