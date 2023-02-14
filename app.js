const express = require("express");

//express app

const app = express();

// register view engineen

app.set("view engine", "ejs");

//listen for re
app.listen(3000);

app.get("/", (req, res) => {
  res.render("index");
  // res.send('<p>home page<p/>')
});

app.get("/about", (req, res) => {
  res.render("about");
  // res.send('<p>About page</p>')
});

app.get("/blogs/create", (req, res) => {
  res.render("create");
});

app.use((req, res) => {
  res.status(404).render("404");
});
