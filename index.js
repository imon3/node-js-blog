const path = require("path");
const expressEdge = require("express-edge");
const express = require("express");

const app = express();

app.use(express.static("public"));

// Use Express Edge
app.use(expressEdge);
app.set("views", `${__dirname}/views`);

// Home Page Route
app.get("/", (req, res) => {
  //Express Static
  // res.sendFile(path.resolve(__dirname, "pages/index.html"));

  // Express Edge
  res.render("index");
});

// About Page Route
app.get("/about", (req, res) => {
  // Express Static
  // res.sendFile(path.resolve(__dirname, "pages/about.html"));

  // Express Edge
  res.render("about");
});

// Contact Page Route
app.get("/contact", (req, res) => {
  // Express Static
  // res.sendFile(path.resolve(__dirname, "pages/contact.html"));

  // Express Edge
  res.render("contact");
});

// Post Page Route
app.get("/post", (req, res) => {
  // Express Static
  // res.sendFile(path.resolve(__dirname, "pages/post.html"));

  // Express Edge
  res.render("post");
});

const port = 3000;

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
