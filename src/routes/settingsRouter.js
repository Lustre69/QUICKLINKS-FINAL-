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
settingsRouter.post("/settings/:userName", (req, res) => {
  const { bio, links } = req.body;

  // Update the User model in the database with the new bio and links data
  (async () => {
    try {
      const user = await User.findOneAndUpdate(
        {userName: req.params.userName},
        { bio, links }, // Update the bio and links fields
        { new: true } // Return the updated user object
        );

        console.log("Username is " + user.userName);
        res.redirect("/profile/" + user.userName);

    } catch(err){
        console.error(err);
    }
  })();

  //console.log("Username(again) is " + user.userName);

  // const user = {

  //   userName: req.params.userName,
  //   // email:    email,
  //   // pw:       pw,
  //   // avatar:   avatar,
  //   // bio:      bio,
  //   // tags:     tags,
  //   // links:    links,
  
  
  //   };

  // User.findOneAndUpdate(

  //   { userName: req.user.userName }, // Update the user based on the currently authenticated user
  //   { bio, links }, // Update the bio and links fields
  //   { new: true } // Return the updated user object
  // )
  //   .then((result) => {
  //     // Redirect back to the profile view
  //     res.redirect("/profile/" + result.userName);
  //   })
  //   .catch((err) => {
  //     console.error("An error occurred: " + err);
  //     res.statusCode = 500;
  //     res.render("error", {
  //       code: 500,
  //     });
  //   });
});

export default settingsRouter;