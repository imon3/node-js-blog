const mongoose = require("mongoose");

const Post = require("./database/models/Posts");

mongoose.connect("mongodb://localhost/node-js-test-blog");

// create a collection record
// Post.create(
//   {
//     title: "My Secon Blog Post",
//     description: "Second Blog Post Description",
//     content: "Second Lorem Ipsum Content"
//   },
//   (err, post) => {
//     console.log(err, post);
//   }
// );

// find all records
// Post.find({}, (err, post) => {
//   console.log(err, post);
// });

// find record by id
// Post.findById("5d114fdd442f6226f0baccf5", (err, post) => {
//   console.log(err, post);
// });

// find record by id and update
Post.findByIdAndUpdate(
  "5d114fdd442f6226f0baccf5",
  {
    title: "My First Blog Post Title Lorem Ipsum"
  },
  (err, post) => {
    console.log(err, post);
  }
);
