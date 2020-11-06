const mongoose = require("mongoose");
const validator = require("validator");
mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useNewUrlParser: true,
  useCreateIndex: true,
});

const user = mongoose.model("user", {
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid");
      }
    },
  },
  password: {
    type: String,
    required: true,
    minlength: 7,
    trim: true,
    validate(value) {
      if (value.toLowerCase().includes("password"))
        throw new Error("Password should not contain 'password'");
    },
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value) {
        if (value < 0) throw new Error("Age should be positive");
      }
    },
  },
});
// const me = user({
//   name: "    Charu     ",
//   email: "charu@gmail.com    ",
//   password: "Charupassword",
// });
// me.save()
//   .then(() => {
//     console.log(me);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
const task = mongoose.model("task", {
  description: {
    type: String,
    required: true,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});
const task1 = task({
  description: "      Node JS course     ",
  completed: false,
});
task1
  .save()
  .then(() => console.log(task1))
  .catch((error) => console.log(error));
