// import module `mongoose`
import mongoose from "mongoose";

// defines the schema for collection `users`
const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  pw: {
    type: String,
    required: true,
  },
  avatar: { //Idk how to implement this
    type: String,
  },
  bio: {
    type: String
  },
  tags: String,
  links: {
    type: [String],
  },
});

const User = mongoose.model("User", UserSchema);

/*
  exports a mongoose.model object based on `UserSchema` (defined above)
  when another script exports from this file
  This model executes CRUD operations
  to collection `users` -> plural of the argument `User`
*/
export default User;
