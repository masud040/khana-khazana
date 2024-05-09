import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  firstName: {
    required: true,
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    required: true,
    type: String,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  password: {
    required: true,
    type: String,
  },
  favourites: {
    type: Array,
  },
});
const UserModel = mongoose.models?.users ?? mongoose.model("users", userSchema);

export { UserModel };
