const express = require("express");

const path = require("path");
const app = express();

app.use(express.static("public"));

// Use Express Edge
// app.use(require("express-edge"));
// app.set("views", `${__dirname}/views`);

// Home Page Route
app.get("/", (req, res) => {
  //Express Static
  res.sendFile(path.resolve(__dirname, "pages/index.html"));

  // Express Edge
  // res.render("index");
});

// About Page Route
app.get("/about", (req, res) => {
  res.sendFile(path.resolve(__dirname, "pages/about.html"));
});

// Contact Page Route
app.get("/contact", (req, res) => {
  res.sendFile(path.resolve(__dirname, "pages/contact.html"));
});

// Post Page Route
app.get("/posts", (req, res) => {
  res.sendFile(path.resolve(__dirname, "pages/post.html"));
});

const port = 3000;

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
