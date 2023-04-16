// settingsRouter.js

import { Router } from "express";
// Models
import User from "../models/UserModel.js";

const settingsRouter = Router();

// Render the settings view
settingsRouter.get("/settings/:userName", (req, res) => {
  // Render the settings view
  res.render("settings", { userName: req.params.userName });
});

// Handle form submission from settings view
settingsRouter.post("/settings/:userName", async (req, res) => {
  const bio = req.body.bio;
  const links = [req.body.link1, req.body.link2, req.body.link3].filter(Boolean); // Filter out null or empty values from links array

  try {
    // Retrieve the existing user object from the database
    const user = await User.findOne({ userName: req.params.userName });

    // Update the bio and links fields only if they are present in the request body and not null or empty
    if (bio !== null && bio !== "") {
      user.bio = bio;
    }
    if (links !== null && links.length > 0) {
      user.links = links;
    }

    // Save the updated user object to the database
    const updatedUser = await user.save();

    console.log("Username is " + updatedUser.userName);
    res.redirect("/profile/" + updatedUser.userName);
  } catch (err) {
    console.error(err);
    // Render an error view or send an error response as appropriate
    res.status(500).render("error", { code: 500 });
  }
});

export default settingsRouter;
