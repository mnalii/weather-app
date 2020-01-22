const path = require("path");
const express = require("express");
const hbs = require("hbs");

const app = express();

// Define paths for express config
const publicDirPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// Setup handlebars engine and view location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

app.use(express.static(publicDirPath));

app.get("/", (req, res) => {
  res.render("index", {
    title: "Weather App",
    name: "Muhammad Nur Ali"
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Me",
    name: "Muhammad Nur Ali"
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    message: "This is Help Page",
    title: "Help",
    name: "Muhammad Nur Ali"
  });
});

app.get("/weather", (req, res) => {
  res.send([
    {
      temperature: 23.45,
      humidity: 21.1
    },
    {
      city: "Batam",
      zipPost: 29433
    }
  ]);
});

app.get("/help/*", (req, res) => {
  res.render("help-not-found", {
    message: "Help Page Not Found"
  });
});

app.get("*", (req, res) => {
  res.render("not-found-page", {
    message: "Page Not Found",
    name: "Muhammad Nur Ali"
  });
});

app.listen(3000, () => console.log("Server up and running on port 3000"));
