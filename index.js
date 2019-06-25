const path = require("path");
const expressEdge = require("express-edge");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

mongoose.connect("mongodb://localhost/node-js-blog", { useNewUrlParser: true });

// Use Express Static
app.use(express.static("public"));

// Use Express Edge
app.use(expressEdge);
app.set("views", `${__dirname}/views`);

// Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ------- Get Routes -------
// ------- Home Page Route -------
app.get("/", (req, res) => {
  //Express Static
  // res.sendFile(path.resolve(__dirname, "pages/index.html"));

  // Express Edge
  res.render("index");
});

// ------- About Page Route -------
app.get("/about", (req, res) => {
  // Express Static
  // res.sendFile(path.resolve(__dirname, "pages/about.html"));

  // Express Edge
  res.render("about");
});

// ------- Contact Page Route -------
app.get("/contact", (req, res) => {
  // Express Static
  // res.sendFile(path.resolve(__dirname, "pages/contact.html"));

  // Express Edge
  res.render("contact");
});

// ------- Post Page Route -------
app.get("/post", (req, res) => {
  // Express Static
  // res.sendFile(path.resolve(__dirname, "pages/post.html"));

  // Express Edge
  res.render("post");
});

// ------- Create New Post Route -------
app.get("/post/new", (req, res) => {
  res.render("create");
});

// ------- Post Routes -------
// -------Post New Post Route -------
app.post("/post/store", (req, res) => {
  res.redirect("/");
});

const port = 3000;

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
