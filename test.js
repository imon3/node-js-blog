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
Post.find({}, (err, post) => {
  console.log(err, post);
});
