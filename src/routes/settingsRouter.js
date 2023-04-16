// Express
import express from "express";
// Models
import User from "../models/UserModel.js";

const searchRouter = express.Router();

// Handle form submission from search bar
searchRouter.post("/search", (req, res) => {
  const searchInput = req.body.searchInput.trim();

  if (!searchInput) {
    console.log("Invalid input: " + searchInput);
    res.redirect("/");
    return;
  }

  User.findOne({ userName: searchInput })
    .then((result) => {
      if (result === null) {
        console.log("No such user found: " + searchInput);
        res.redirect("/");
        return;
      }

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

export default searchRouter;
