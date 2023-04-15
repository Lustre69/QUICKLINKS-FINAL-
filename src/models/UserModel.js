import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
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
  avatar: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Image",
  },
  bio: {
    type: String,
    maxlength: 200,
  },
  tags: {
    type: [String],
    validate: {
      validator: function (v) {
        return v.length <= 5;
      },
      message: "User can have at most 5 tags",
    },
  },
  links: {
    type: [{
      name: {
        type: String,
        required: true,
        trim: true,
        maxlength: 20,
      },
      url: {
        type: String,
        required: true,
        trim: true,
        maxlength: 200,
        validate: {
          validator: function (v) {
            return /^https?:\/\/(.*)/.test(v);
          },
          message: "Invalid URL",
        },
      },
    }],
    validate: {
      validator: function (v) {
        return v.length <= 5;
      },
      message: "User can have at most 5 links",
    },
  },
});

const User = mongoose.model("User", userSchema);

export default User;
