const express = require("express");
const app = express();

// Define the root route
app.get("/", (req, res) => {
  res.status(200).json("Welcome to the root endpoint!");
});

// Define the /home route
app.get("/home", (req, res) => {
  res.status(200).json("Welcome, your app is working well");
});

// Export the app for Vercel
module.exports = app;
