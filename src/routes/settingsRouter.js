// settingsRouter.js

import { Router } from "express";
// Models
import User from "../models/UserModel.js";

const settingsRouter = Router();

// Render the settings view
settingsRouter.get("/settings", (req, res) => {
  // Render the settings view
  res.render("settings", { userName: req.params.userName });
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
