import { Router } from "express";
// Models
import User from "../models/UserModel.js";

const settingsRouter = Router();

// Middleware function to authenticate user and set req.user object
const authenticateUser = (req, res, next) => {
  // You can implement your own authentication logic here
  // For example, you can use a session or a JWT to authenticate the user
  // Once the user is authenticated, set the req.user object with user data
  // Example: req.user = { userName: 'username', email: 'email' }

  // For demonstration purposes, assuming user is already authenticated with userName 'username'
  req.user = { userName: 'username', email: 'email' };
  next();
};

// Use the authenticateUser middleware for all routes in the settingsRouter
settingsRouter.use(authenticateUser);

// Render the settings view
settingsRouter.get("/settings", (req, res) => {
  // Render the settings view
  res.render("settings");
});

// Handle form submission from settings view
settingsRouter.post("/settings", (req, res) => {
  const { bio, links } = req.body;

  // Update the User model in the database with the new bio and links data
  User.findOneAndUpdate(
    { userName: req.user.userName }, // Update the user based on the currently authenticated user
    { bio, links }, // Update the bio and links fields
    { new: true } // Return the updated user object
  )
    .then((result) => {
      // Redirect back to the profile view
      res.redirect("/profile/" + result.userName);
    })
    .catch((err) => {
      console.error("An error occurred: " + err);
      res.statusCode = 500;
      res.render("error", {
        code: 500,
      });
    });
});

export default settingsRouter;
