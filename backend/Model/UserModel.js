// Models for User
// - Name
// - email
// - password
// - pic

import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const UserModel = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    pic: {
      type: String,
      default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
  },
  {
    timestamps: true,
  }
);

UserModel.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password); //Comparing the password with the hashed password.
};

UserModel.pre("save", async function (next) {
  //before Saving the password we will hash the password
  if (!this.isModified) {
    next();
  }
  const salt = await bcrypt.genSalt(10); //for encryption
  this.password = bcrypt.hash(this.password, salt); //Hashing the password
});

const User = mongoose.model("User", UserModel);
export default User;
